import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import * as configModule from '../config/config.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configModule[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelFiles = fs.readdirSync(__dirname).filter(file => {
    return (
        file.indexOf('.') !== 0 &&
        file !== path.basename(__filename) &&
        file.endsWith('.js') &&
        !file.endsWith('.test.js')
    );
});

// Dynamically import all models and associate them if necessary
const importModels = async () => {
    for (const file of modelFiles) {
        const { default: modelDefiner } = await import(path.join(__dirname, file));
        const model = modelDefiner(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    }

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
};

await importModels();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log('Sequelize instance details:');
console.log(sequelize);

export { sequelize, Sequelize };
export default db;

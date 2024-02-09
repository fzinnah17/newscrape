import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Newsarticle = sequelize.define('Newsarticle', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'news',
});

export default Newsarticle;


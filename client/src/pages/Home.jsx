import React, { useEffect, useState } from 'react';
import { getNewsArticles } from '../services/newsService.js';

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch news articles from the backend using newsService.js
        const fetchArticles = async () => {
            try {
                const response = await getNewsArticles();
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Homepage</h1>
            {articles.map((article) => (
                <div key={article.id} className="card">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
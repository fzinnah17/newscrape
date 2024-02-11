import React, { useEffect, useState } from 'react';
import { getAllNews } from '../services/newsService.js';
import "../css/Home.css";


const Home = () => {
    const [articles, setArticles] = useState([]);
    const [democratArticles, setDemocratArticles] = useState([]);
    const [RepublicArticles, setRepublicArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getAllNews();
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchArticles();
    }, []);

    useEffect(() => {
        const filterArticles = () => {
            const democratArticles = articles.filter(article => article.category === 'democrat');
            const RepublicArticles = articles.filter(article => article.category === 'republic');
            setDemocratArticles(democratArticles);
            setRepublicArticles(RepublicArticles);
        };

        filterArticles();
    }, [articles]);

    return (
        <div>
            <h1>Home</h1>
            <div className="left-cards">
                {democratArticles.map((article) => (
                    <div key={article.id} className="card">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
            <div className="right-cards">
                {RepublicArticles.map((article) => (
                    <div key={article.id} className="card">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;


import React, { useEffect, useState } from 'react';
import { getAllNews } from '../services/newsService.js';

const Home = () => {
    const [democratArticles, setDemocratArticles] = useState([]);
    const [republicArticles, setRepublicArticles] = useState([]);

    useEffect(() => {
        const fetchAndFilterArticles = async () => {
            try {
                const response = await getAllNews();
                const articles = response.data.articles;
                // Filter articles once, immediately after fetching
                const filteredDemocratArticles = articles.filter(article => article.category === 'democrat');
                const filteredRepublicArticles = articles.filter(article => article.category === 'republic');
                setDemocratArticles(filteredDemocratArticles);
                setRepublicArticles(filteredRepublicArticles);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchAndFilterArticles();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Home</h1>
            <div className="flex flex-wrap justify-center">
                {democratArticles.map((article) => (
                    <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-blue-100 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center">
                {republicArticles.map((article) => (
                    <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-red-100 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { getAllNews } from '../services/newsService.js';

const Home = ({ onSwipe }) => {
    const [democratArticles, setDemocratArticles] = useState([]);
    const [republicArticles, setRepublicArticles] = useState([]);

    useEffect(() => {
        const fetchAndFilterArticles = async () => {
            try {
                const response = await getAllNews();
                const articles = response.data.articles;
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
            <div className="flex justify-center">
                <button className="mt-4 mb-8 bg-gray-200 text-lg px-6 py-2 rounded-full shadow-md hover:bg-gray-300">Swipe</button>
            </div>
            <h1 className="text-4xl font-bold text-center mb-6">News Dashboard</h1>
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <h2 className="text-2xl font-semibold text-center mb-4">Democrat News</h2>
                    {democratArticles.map((article) => (
                        <div key={article.id} className="bg-blue-100 rounded-xl p-6 shadow-lg mb-4">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <h2 className="text-2xl font-semibold text-center mb-4">Republic News</h2>
                    {republicArticles.map((article) => (
                        <div key={article.id} className="bg-red-100 rounded-xl p-6 shadow-lg mb-4">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-700">{article.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

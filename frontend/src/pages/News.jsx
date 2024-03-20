import { useState, useEffect } from 'react';
import { getNews } from '@/api/news.api';

function News() {
  const [news, setNews] = useState([]);

  const getArticles = async () => {
    try {
      const response = await getNews();
      console.log(response.data);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div>
        <h1>Latest News</h1>
        {news &&
          news.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>Author: {article.author}</p>
              <p>Published at: {article.publishedAt}</p>
              {article.url && <a href={article.url}>Read More</a>}
              {article.urlToImage && (
                <img src={article.urlToImage} alt='Article' />
              )}
              <p>{article.content}</p>
              <hr />
            </div>
          ))}
      </div>
    </>
  );
}

export default News;

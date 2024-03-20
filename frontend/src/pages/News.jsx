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
            <div
              key={index}
              className='overflow-hidden rounded-lg shadow transition hover:shadow-lg'
            >
              <img
                alt='articleImg'
                src={article.urlToImage}
                style={{ width: '200px' }}
              />

              <div className='bg-white p-4 sm:p-6'>
                <time
                  dateTime={article.publishedAt}
                  className='block text-xs text-gray-500'
                >
                  {article.publishedAt}
                </time>

                <div href='#'>
                  <h3 className='mt-0.5 text-lg text-gray-900'>
                    {article.title}
                  </h3>
                  <h3 className='mt-0.5 text-lg text-gray-900'>
                    Author: {article.author}
                  </h3>
                </div>

                <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
                  {article.content}
                </p>
                {article.url && <a href={article.url}>Read More</a>}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

/* {news &&
  news.map((article, index) => (
    <div key={index}>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Published at: {article.publishedAt}</p>
      {article.url && <a href={article.url}>Read More</a>}
      {article.urlToImage && (
        <img
          style={{ width: '100px' }}
          src={article.urlToImage}
          alt='Article'
        />
      )}
      <p>{article.content}</p>
      <hr />
    </div>
  ))} */
export default News;

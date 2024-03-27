import { useState, useEffect } from 'react';
import { getNews } from '@/api/news.api';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    try {
      const response = await getNews();
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className='max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100'>
      <h1 className='text-4xl font-bold text-center mb-8'>Latest News</h1>
      {loading ? (
        <div className='flex flex-col justify-center items-center'>
          <img src='/src/assets/LoadingNews.gif' alt='Loading...' />
          <p>Loading news...</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {news.map((article, index) => {
            if (index !== 0) {
              return (
                <div
                  key={index}
                  className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-500'
                >
                  <img
                    className='w-full'
                    src={article.urlToImage}
                    alt='Article'
                  />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2 dark:text-gray-100'>
                      {article.title}
                    </div>
                    <p className='text-gray-700 text-base dark:text-gray-400'>
                      {article.content}
                    </p>
                  </div>
                  <div className='px-6 py-4'>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-400'>
                      {article.category}
                    </span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-400'>
                      {article.publishedAt}
                    </span>
                    {article.url && (
                      <a
                        href={article.url}
                        style={{
                          color: 'inherit',
                          paddingLeft: 40,
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => (
                          (e.target.style.color = 'blue'),
                          (e.target.style.textDecoration = 'underline')
                        )}
                        onMouseLeave={e => (
                          (e.target.style.color = 'inherit'),
                          (e.target.style.textDecoration = 'none')
                        )}
                      >
                        <span
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          Read More
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default News;

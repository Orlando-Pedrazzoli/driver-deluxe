import React from 'react';
import sagresimg from '../../assets/algarve.jpg';
import algarveimg from '../../assets/algarve2.jpg';
import lagosimg from '../../assets/lagos.jpg';
import vilamouraimg from '../../assets/vilamoura.jpg';
import albufeiraimg from '../../assets/albufeira.jpg';
import louleimg from '../../assets/loule.jpg';
import portimaoimg from '../../assets/portimao.jpg';

function AlgarveTour() {
  const videoLink =
    'https://www.youtube.com/watch?v=d6L88EoA34o&ab_channel=Loz%27sLeisure';
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800'>
      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50'
        >
          <img
            src={algarveimg}
            alt=''
            className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'
          />
          <div className='p-6 space-y-2 lg:col-span-5'>
            <a href={videoLink} target='_blank'>
              <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline'>
                Algarve
              </h3>
              <span className='text-xs dark:text-gray-600'>Explore Video</span>
              <p>
                Due to its coastal location and economic development, Lagos was
                the stage of the beginning of the Portuguese Discoveries, in the
                15th century. Proudly bearing the statue of Henry the Navigator
                considered the "father" of the Discoveries and the monument in
                honour of Gil Eanes, son of Lagos and hero of the Discoveries.
                The city is also known for its beautiful white sand beaches, and
                Dona Ana Beach is the most famous and beautiful. The Lagos
                Marina, opened in 1994, is considered and distinguished as one
                of the best in Europe, attracting crews of various
                nationalities.
              </p>
            </a>
          </div>
        </a>
        <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Sagres Fortress Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/iGSFYzdzQzqJ3vx28'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={sagresimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Fortress of Sagres</h3>
              <p>
                The Fortress of Sagres is an imposing fortification built in the
                mid-15th century by Henry, the Navigator. The building is the
                human extension of the natural rock and was for centuries the
                main centre of a maritime defence system. It is a mythical and
                magical place in the history of the Portuguese discoveries.
                Outside the fortress, there are the Compass-Rose, a circle of 43
                meters in diameter and 32 spokes made of stones and which some
                scholars believe to have been a sundial.
              </p>
            </div>
          </div>
          {/* Lagos - Ponta da Piedade Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/5nzjCHigc8CZv6R3A'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={lagosimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>
                Ponta da Piedade - Lagos
              </h3>
              <p>
                The Ponta da Piedade Grottoes are accessible only by sea and
                with unmatched beauty are composed of fascinating natural rock
                formations that the Atlantic Ocean has carved through the sea
                and wind. These limestone rock formations of the cliff-type up
                to 20 meters high are the main tourist destination in the
                region.
              </p>
            </div>
          </div>
          {/* Vilamoura Marina Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/3U1jjiZuhJbXn3Lx7'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={vilamouraimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Marina of Vilamoura</h3>
              <p>
                The Marina of Vilamoura, one of the largest resorts in Europe
                and the main place of attraction in this town, receives
                luxurious yachts from all over the world. The brand shops,
                cafes, bars and restaurants of chic and cosmopolitan atmosphere
                complete the magnificent marina of Vilamoura. We also highlight
                the Casino of Vilamoura and the international DJs who work in
                local nightclubs.
              </p>
            </div>
          </div>
          {/* Albufeira Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/TbprjaBns6sRefwu7'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={albufeiraimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Albufeira</h3>
              <p>
                It is currently known for its fine sand beaches, warm clear
                water that captivates the bathers, results also in high demand
                for international tourists. With over 30 Miles, the coastline of
                Albufeira is gifted with magnificent towering cliffs that
                dominate an extensive strip of golden sand between Vilamoura and
                the Olhos d`Água beaches, delimited by dunes and lagoons in the
                Salgados area, not forgetting the most famous beaches near urban
                areas also.
              </p>
            </div>
          </div>
          {/* Loulé Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/tCf7LFxEZwTVRBpV8'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={louleimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Loulé</h3>
              <p>
                The Moorish origins are still visible in the tower of the Mother
                Church of Loulé called St. Clemente, with Gothic style and
                terminal Baroque decoration, from the 13th and the 16th
                centuries. The Castle, in the northern part of the city, is also
                of Moorish origin, but it was rebuilt in the 13th century. We
                also highlight the Church of Mercy which is a 16th-century
                building, with a Manueline portal of radiated type that houses
                two images from the 16th century.
              </p>
            </div>
          </div>
          {/* Portimão Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/5BhzMeNB68yEje1C8'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={portimaoimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Portimão</h3>
              <p>
                The Fortress of Santa Catarina, from the 17th century, was built
                to protect the local population from pirate attacks. It was
                partially rebuilt after the 1755 earthquake and is part of a
                chapel dedicated to St. Catarina. Situated at the entrance of
                the marina, overlooking the beach and the cliffs of the Rock
                Beach, it presents an extraordinary landscape located over the
                sea and the river.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlgarveTour;

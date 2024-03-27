import React from 'react';
import nationalpalaceimg from '../assets/nationalpalace.jpg';
import sintraimg from '../assets/sintramain.jpg';
import penapalaceimg from '../assets/penapalace.jpg';
import seteaisimg from '../assets/seteais.jpg';
import cabodarocaimg from '../assets/cabodaroca.jpg';
import cascaisimg from '../assets/cascais.jpg';
import estorilimg from '../assets/estoril.jpg';
function SintraTour() {
  const videoLink =
    'https://www.youtube.com/watch?v=Vu5JHrcV-Ok&ab_channel=TravelPenguin';
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800'>
      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50'
        >
          <img
            src={sintraimg}
            alt=''
            className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'
          />
          <div className='p-6 space-y-2 lg:col-span-5'>
            <a href={videoLink} target='_blank'>
              <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline'>
                Sintra & Cascais
              </h3>

              <span className='text-xs dark:text-gray-600'>Explore Video</span>

              <p>
                The town of Sintra is one of the best known Portuguese villages,
                not only for its architectural and natural beauty but also by
                all the legends associated with the mysticism of Sintra. In
                Sintra, there are traces of settlement from the stone age. Ever
                since the village attracts the most distinguished artists for
                its natural beauty and mysticism due to the constant fog that
                surrounds the top of the mountain. This village has always been
                preferred by Kings to build their summer palaces. Of the many
                palaces and places of interest in Sintra, The Sintra National
                Palace, the Pena Palace, the Moorish Castle, the Regaleira
                Palace and Gardens, The Seteais Palace and The Convent of the
                Capuchins.
              </p>
            </a>
          </div>
        </a>
        <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={nationalpalaceimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>
                National Palace of Sintra
              </h3>

              <p>
                The National Palace of Sintra is located in the centre of the
                village and has been, since the time of the Moors, a royal
                residence. The origins of the palace date back to the 8th
                century and, since then, it has undergone several restoration
                and improvements, as well as additions that provided the Palace
                of various architectural styles, from the Moorish-style to the
                Manueline style, with armillary spheres and nautical cables
                present at the Tower of Mecca.
              </p>
            </div>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={penapalaceimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Pena Palace</h3>

              <p>
                The Pena Palace stands in as one of the highest peaks of the
                Sintra Mountain and displays a wide variety of architectural
                styles. It was built in the 19th century by D. Fernando II, on
                the ruins of a former convent and it we can see from the
                Neo-Manueline style, present in the Arches of the Newts, to the
                Romanticism, present in the Arabic room. In the ballroom, we
                find German and Oriental porcelains stained-glass windows.
              </p>
            </div>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={seteaisimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Seteais Palace</h3>

              <p>
                The Seteais Palace was built in the 18th century and has
                privileged views of the sea, the Valley and the Sintra
                Mountains. We can also see under the Arch of the Seteais Palace,
                in an aligned way, the Pena Palace. Its architectural style is a
                neoclassical being one of the palaces reworked by the
                bourgeoisie of the time. In its interior, you can admire
                paintings and tapestries. Today this Palace serves as a
                wonderful luxury hotel.
              </p>
            </div>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={cabodarocaimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Cape Roca</h3>

              <p>
                The Cape Roca is the westernmost point of continental Europe and
                was mentioned by Luís de Camões as the place "where the land
                ends and the sea begins", which is a place of natural beauty,
                where you can enjoy a unique landscape, and the sea makes its
                presence in an imposing way. There is still in operation the
                third oldest lighthouse on the coast of Portugal.
              </p>
            </div>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={cascaisimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Cascais</h3>

              <p>
                Cascais is a former fishing village that since the 19th century
                has developed a lot, but in the 20th century became known dubbed
                as the "Portuguese Riviera". In Cascais, there are some
                monuments of interest, mainly related to the maritime defence,
                such as, the Fort of Guincho and the Fort of Santo António da
                Barra.We can visit the Cascais Citadel, which includes the Fort
                of Our Lady of Light of Cascais where now works the beautiful
                Cascais Guesthouse.
              </p>
            </div>
          </a>
          <a
            rel='noopener noreferrer'
            href='#'
            className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block'
          >
            <img
              role='presentation'
              className='object-cover w-full rounded h-44 dark:bg-gray-500'
              src={estorilimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Estoril</h3>

              <p>
                Estoril is mainly known in the sports panorama more specifically
                through motor racing and tennis. It was however during and after
                World War II that the city stood to receive a huge number of
                refugees and exiles, from which we highlight D. Juan de Borbón,
                Count of Barcelona and King Umberto II of Italy, Carol II of
                Romania, Simeon II of Bulgaria and numerous figures from sports
                and cultural panorama.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SintraTour;

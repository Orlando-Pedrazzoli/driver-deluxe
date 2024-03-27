import React from 'react';
import vilanovaimg from '../../assets/vilanova.jpg';
import portoimg from '../../assets/portoimg.jpg';
import majesticimg from '../../assets/majestic.jpg';
import saobentoimg from '../../assets/saobento.jpg';
import squarebattleimg from '../../assets/squarebattle.jpg';
import cathedralimg from '../../assets/cathedral.jpg';
import portwineimg from '../../assets/portwine.jpg';
function PortoTour() {
  const videoLink =
    'https://www.youtube.com/watch?v=P170_f49pv4&ab_channel=AroundTheWorld4K';
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800'>
      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50'
        >
          <img
            src={portoimg}
            alt=''
            className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'
          />
          <div className='p-6 space-y-2 lg:col-span-5'>
            <a href={videoLink} target='_blank'>
              <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline'>
                Porto
              </h3>

              <span className='text-xs dark:text-gray-600'>Explore Video</span>
              <p>
                Porto, also known as Invicta is one of the most visited cities
                in Europe. It is the town that gave the name to Portugal, in the
                Roman period (c. 200 BC) it was called Cale or Portus Cale.It is
                known worldwide for its bridges and old and contemporary
                architecture, and for its historical centre, as well as for its
                wine and cuisine, with traditional dishes such as "Tripe with
                white beans" and the famous "Francesinha" . In Vila Nova de
                Gaia, on the opposite bank of the River, we find the port wine
                cellars, where you can get to know the history of the famous
                port wine and where you can taste the different varieties.
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
              src={vilanovaimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Vila Nova de Gaia</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                Connecting the city of Porto to Vila Nova de Gaia since the late
                nineteenth century, the D. Luis I Bridge is one of the ex-libris
                of Porto. Built in iron and with two decks, the work of the
                Belgian engineer Théophile Seyrig, a student of Gustave Eiffel,
                has replaced the old suspension bridge that existed in the same
                location. Currently, in the upper deck circulates the Porto
                Metro and in the lower deck the pedestrians and automobiles.
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
              src={majesticimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Majestic Cafe</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Majestic Cafe, open since December 17, 1921, with the
                initial name of Elite, changed its name the following year to
                Majestic. This Café emanates an atmosphere of luxury, refinement
                and well-being. Up to this day it continues to be animated with
                poetry recitals, piano concerts, art exhibits, book launches and
                shots for national or foreign films.
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
              src={saobentoimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>
                St. Bento Train Station
              </h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The St. Bento Train Station, of French influence, is the
                ex-libris of the Portuguese railways serving the city of Porto.
                It is famous for it stunning tile panels depicting various
                stories of bygone days in the North of the country, being
                portrayed, among others, the Tournament of Arcos de Valdevez, D.
                João I and D. Filipa de Lencastre in Porto, in 1387, and the
                Conquest of Ceuta.
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
              src={squarebattleimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Battle Square</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Battle Square is situated in the city centre of Porto and
                tradition states that, in the 10th century, it was the scene of
                a bloody battle between the Saracens of Almancor and the
                inhabitants of Porto, which would end defeated, resulting in the
                razing of the city. It is one of the busiest points and visited
                by tourists visiting the city with proximity to Santa Catarina
                Street, the main commercial artery of downtown of Porto.
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
              src={cathedralimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>The Cathedral</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Cathedral situated in the historic centre of Porto is one of
                the leading and oldest monuments of Portugal. The beginning of
                its construction dated to the first half of the 12th century and
                lasted until the beginning of the 13th century. In the 17th
                century, the Main Chapel originally in Romanesque style was
                replaced by a larger one in the Baroque style, suffering many
                changes over the centuries.
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
              src={portwineimg}
            />
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold '>Port wine cellars</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                In the Port wine cellars, you will have the opportunity to get
                to know every step of the production process of this excellent
                wine produced exclusively from grapes from the Douro Demarcated
                Region. This natural and fortified wine despite being produced
                with grapes of the Douro Region and stored in the cellars of
                Vila Nova de Gaia became known as "Port Wine".
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortoTour;

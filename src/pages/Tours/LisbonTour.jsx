import React from 'react';
import rossioimg from '../../assets/rossio.jpg';
import lisbonimg from '../../assets/lisbon.jpg';
import casteloimg from '../../assets/castelo.jpg';
import jeronimoimg from '../../assets/jeronimo.jpg';
import discoveryimg from '../../assets/discovery.jpg';
import towerimg from '../../assets/tower.jpg';
import nationsparkimg from '../../assets/nationspark.jpg';

function LisbonTour() {
  const videoLink =
    'https://www.youtube.com/watch?v=mK7rgh4fhYQ&t=4s&ab_channel=VisitPortugal';
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800'>
      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50'
        >
          <img
            src={lisbonimg}
            alt=''
            className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'
          />
          <div className='p-6 space-y-2 lg:col-span-5'>
            <a href={videoLink} target='_blank'>
              <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline'>
                Lisbon
              </h3>
              <span className='text-xs dark:text-gray-600'>Explore Video</span>
              <p>
                Known as the city on the seven hills its name comes from
                Olisipo, a name that the town already had before the Roman
                occupation, in 205 BC. Located in an area of high-intensity
                seismic, it suffered various earthquakes over the centuries,
                having the 1755 earthquake being followed by a tsunami and fire,
                destroying the entire waterfront of the city. The reconstruction
                of the city plan implemented by Marquis of Pombal is still
                visible on the streets of Lisbon, mostly in downtown Lisbon.
                Lisbon was one of the main centres of introduction and
                development of Christianity in the Iberian Peninsula.
              </p>
            </a>
          </div>
        </a>
        <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Rossio Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/w96YVnMqWZ269BVe7'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={rossioimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Rossio Square</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Rossio Square, with the official name of D. Pedro IV, and
                with a statue representing him, is a meeting point of the city
                with cafes and pastry shops where the famous Swiss Pastry is
                located. In the north side of the square, you can find the
                National Theatre D. Mary II. At the base of the statue, the four
                female figures represent allegories to Justice, Strength, Wisdom
                and Restraint, qualities assigned to D. Pedro IV.
              </p>
            </div>
          </div>
          {/* St. George Castle Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/s46xUtjYZgH7HvvG7'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={casteloimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>St. George Castle</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The St. George Castle, once Moorish and residence of Kings, was
                transformed in the 30s in a public garden. The current name
                derives from the devotion of the St. George Castle, patron saint
                of the knights and the crusades, made by order of D. João I in
                the 14th century. It stands in a dominant position on the
                highest hill in the historic centre of the city, offering
                visitors one of the most beautiful views of the city and Tagus
                River estuary.
              </p>
            </div>
          </div>
          {/* Jerónimos Monastery Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/Atg86gDeYDo4wh5p6'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={jeronimoimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Jerónimos Monastery</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Jerónimos Monastery dated back to the 16th century and was
                built by King Manuel I. It constitutes the pinnacle of Manueline
                architecture as we can observe in the portal carved into the
                south facade. The monastery was funded by profits from the trade
                in spice, precious stones and gold after Vasco da Gama has
                doubled the Cape of Good Hope and discovered the sea route to
                India, establishing the Portuguese trade routes in the Indian
                Ocean. In this Monastery, Vasco da Gama and Luís Vaz de Camões
                are buried.
              </p>
            </div>
          </div>
          {/* Monument to the Discoveries Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/TjS5Q8QhpLCubKHm8'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={discoveryimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>
                Monument to the Discoveries
              </h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Monument to the Discoveries lies on the right bank of the
                Tagus River. The monument was erected to honour the elements
                involved in the Portuguese Discoveries. It presents itself in
                the form of a Caravel, with the shield of Portugal on the sides
                and the sword of the Royal House of Avis over the entrance. You
                can also see the statues of Portuguese Heroes related to the
                Discoveries, among other illustrious figures of the time.
              </p>
            </div>
          </div>
          {/* Belém Tower Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/fnV1kToT5anpDeSA9'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={towerimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>Belém Tower</h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The Belém Tower, a construction initiated in 1514 under the
                reign of D. Manuel I and completed in 1521, was considered a
                fortress once positioned in the Centre of the River Tagus. It is
                a starting point for explorers of the Discoveries and a
                reference to the explorers that were returning from the Indies
                and of the New World and is a symbol of power and expansion. The
                beauty of the Tower is in the exterior decoration, the rooms of
                the Tower also deserve a visit because of the gallery and the
                panorama that one enjoys.
              </p>
            </div>
          </div>
          {/* Park of Nations or Expo Image with Overlay */}
          <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 relative'>
            <a
              rel='noopener noreferrer'
              href='https://maps.app.goo.gl/W1hxVwRFEgr4emxx5'
              target='_blank'
            >
              <img
                role='presentation'
                className='object-cover w-full rounded h-44 dark:bg-gray-500'
                src={nationsparkimg}
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                <span className='text-white text-lg font-semibold'>
                  View on Map
                </span>
              </div>
            </a>
            <div className='p-6 space-y-2'>
              <h3 className='text-2xl font-semibold'>
                Park of Nations or Expo
              </h3>
              <span className='text-xs dark:text-gray-600'>
                Explore Portugal
              </span>
              <p>
                The location of the Lisbon World Exposition of 1998 is now known
                as Park of Nations or Expo. Contemporary architecture has become
                a centre of cultural activities with attractions and recreation
                spaces for the family. Here we can visit the Pavilion of
                Knowledge, a modern Museum of Science and Technology with
                various interactive exhibits. The Vasco da Gama Bridge, the
                longest bridge in Europe, has 17 Km and was built for this
                exhibition. What until then was an industrial area has now
                become the most modern area of the city of Lisbon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LisbonTour;

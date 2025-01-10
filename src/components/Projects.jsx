import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-4 pt-20 px-6 md:px-16 lg:px-24 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Our <span className='underline underline-offset-4 decoration-1 font-light'>Services</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
          onClick={prevProject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextProject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Project slider container */}
      <div className='overflow-hidden -ml-4 -mr-4'>
        <div
          className='flex gap-[60px] transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <a
              href='#Contact'
              key={index}
              className='relative flex-shrink-0 w-[calc(100%-30px)] sm:w-[22%] group'
            >
              {/* Image container */}
              <div className='relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-60 object-cover rounded-lg mb-6 transition-transform transform group-hover:scale-105 group-hover:brightness-50'
                />
                {/* Hover overlay */}
                <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <img
                    src={assets.link_icon} 
                    alt='Link Icon'
                    className='w-8 h-8 mb-2'
                  />
                  <span className='text-white text-lg font-semibold'>
                    Contact Us
                  </span>
                </div>
              </div>
              {/* Title box */}
              <div className='absolute left-0 right-0 bottom-5 flex justify-center translate-y-5 group-hover:hidden'>
                <div className='flex justify-center bg-white w-3/4 px-4 py-3 mb-2 shadow-[4px_4px_8px_rgba(0,0,0,0.3)]'>
                  <h2 className='text-xl font-semibold text-gray-700'>
                    {project.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

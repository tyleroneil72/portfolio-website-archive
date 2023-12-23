import { useState, useEffect } from "react";
import Title from "../Title";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { BiAlarmExclamation } from "react-icons/bi";
import { FaArrowTurnUp } from "react-icons/fa6";
import { MdOutlineWavingHand } from "react-icons/md";

function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-20 mr-0 pb-10 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-6rem)] ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Notification
        text="I'm currently seeking Summer 2024 Opportunities!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <BiAlarmExclamation />
          </IconContext.Provider>
        )}
      />
      <Title title={"Home Page"} />

      <div className={containerClasses}>
        <div className='bg-gray-300 p-6 rounded-lg shadow-md text-gray-800 mb-8 md:mb-16'>
          <h2 className='text-3xl mb-4 font-semibold'>
            Welcome To My Website!
            <span className='inline-block ml-2'>
              <MdOutlineWavingHand />
            </span>
          </h2>
          <p className='mb-6'>
            Here, I present a collection of my projects and skills. I encourage
            you to explore the site and delve into the showcased projects.
            Should you have any inquiries or wish to get in touch, please feel
            free to contact me.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='w-full'>
              <a
                href='https://github.com/tyleroneil72/portfolio-website'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneil72&repo=portfolio-website&theme=material-palenight'
                  alt='Github Repo Card'
                  className='w-full h-auto rounded-lg shadow-md transition-transform transform-gpu md:hover:scale-105 hover:scale:100'
                  loading='lazy'
                />
              </a>
              <p className='text-center flex items-center justify-center pt-3'>
                <span className='bg-gray-600 rounded flex items-center px-3 py-2 text-gray-50'>
                  I am currently Working on&nbsp;&nbsp; <FaArrowTurnUp />
                </span>
              </p>
            </div>
            <img
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=tyleroneil72&layout=donut&theme=material-palenight'
              alt='Github Stats Card'
              className='w-full h-auto rounded-lg shadow-md'
              loading='lazy'
            />
            <img
              src='https://github-readme-stats.vercel.app/api?username=tyleroneil72&show_icons=true&theme=material-palenight&hide_rank=true'
              alt='Github Stats Card'
              className='w-full h-auto rounded-lg shadow-md'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

import { useState, useEffect } from "react";
import Title from "../Title";

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"About Me"} />

      <div
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>Coming Soon...</p>
      </div>
    </>
  );
};

export default AboutMe;

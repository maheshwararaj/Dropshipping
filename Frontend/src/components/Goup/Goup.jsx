import React from "react";
import "./Goup.css";
import  { useState, useEffect } from "react";

const Goup = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return(<>{scrollPosition > 10 ? <a href="#"> <div className="up-arrow" title="Go to Top">
  &uarr;
</div></a> : ""}</>
  );

};

export default Goup;

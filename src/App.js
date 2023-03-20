import React, { useEffect, useState } from "react";

import data from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [people, setPeople] = useState(data);

  const [index, setIndex] = useState(0);

  // whenever you add interval add remove interval
  useEffect(() => {
    // give variable to interval
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    if (index > people.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(people.length - 1);
    }
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Slider
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, img, name, job, text } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={img} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{job}</p>
              <p className="text">{text}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <div>
          <button
            type="button"
            className="prev"
            onClick={() => setIndex(index - 1)}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="next"
            onClick={() => setIndex(index + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;

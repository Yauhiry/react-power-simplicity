import React from 'react';
import { SliderItem } from '../SliderItem/SliderItem';
import './Slider.scss';

export const Slider = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="slider">
          <ul className="slider__list">
            <SliderItem />
          </ul>
          <ul className="slider__dots">
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot slider__dot--active"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

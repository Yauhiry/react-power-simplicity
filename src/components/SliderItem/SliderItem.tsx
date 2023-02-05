import React from 'react';
import './slider-item.scss';

export const SliderItem = () => {
  return (
    <li className="slider__item">
      <div className="slider__content">
        <h2 className="slider__title">The Power of Simplicity</h2>
        <p className="slider__subtitle">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className="slider__button">
          <span className="slider__button-text"> Learn</span>
        </button>
      </div>
    </li>
  );
};

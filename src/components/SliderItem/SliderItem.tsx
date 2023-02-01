import React from 'react';
import './SliderItem.scss';

export const SliderItem = () => {
  return (
    <li className="slider__item">
      <div className="slider__content">
        <h2 className="slider__title">The Power of Simplicity</h2>
        <p className="slider__subtitle">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className="slider__button">Learn</button>
      </div>
    </li>
  );
};

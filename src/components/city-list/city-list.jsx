import React from "react";
import * as Type from '../../types';
import {NavLink} from "react-router-dom";

import {City} from '../../constants';

const CityList = (props) => {
  const {currentCity, cityClickHandle} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((city) => {
              return (
                <li key={city} className="locations__item">
                  <NavLink
                    to={`/`}
                    className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
                    onClick={() => cityClickHandle(city)}
                  >
                    <span>{city}</span>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  currentCity: Type.CITY.isRequired,
  cityClickHandle: Type.FUNCTION.isRequired
};

export default CityList;

import React, { useState } from "react";

import "../App.css";

const Countries = ({ item }) => {
  const [showItem, setShowItem] = useState(false);
  const haveChildren = item.countries && item.countries.length > 0;
  const haveLang = item.languages && item.languages.length > 0;
  const changeVisibility = () => setShowItem((prev) => !prev);
  return (
    <>
      <div className="countries">
        <h2
          onClick={
            haveChildren
              ? (e) => {
                  e.stopPropagation();
                  changeVisibility();
                }
              : undefined
          }
          className="countries__name"
        >
          {item.emoji}
          {item.name}
        </h2>
        {haveLang && <span>{item.languages[0].name}</span>}
      </div>

      {haveChildren && showItem && (
        <ul>
          {item.countries.map((items) => (
            <li key={items.name}>
              <Countries
                item={items}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;

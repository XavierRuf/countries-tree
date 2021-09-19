import React, { useState } from "react";

import "../App.css";

const Countries = ({ item, languages }) => {
  const [showItem, setShowItem] = useState(false);
  const haveChildren = item.countries && item.countries.length > 0;
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
        <span>{languages}</span>
      </div>

      {haveChildren && showItem && (
        <ul>
          {item.countries.map((items) => (
            <li key={items.name}>
              <Countries
                item={items}
                languages={
                  items.languages.length > 0 ? ` lang: ${items.languages[0].name}` : ""
                }
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;

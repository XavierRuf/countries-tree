import React, { useState } from "react";
import "../App.css";
const Countries = ({ item }) => {
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
          {item.name}
        </h2>
      </div>

      {haveChildren && showItem && (
        <ul className="tree">
          {item.countries.map((items) => (
            <li key={items.name}>
              <Countries item={items} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;

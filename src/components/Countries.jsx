import React, { useState, useContext, useEffect } from "react";
import { TreeContext } from "../App";

import "../App.css";

const Countries = ({ item }) => {
  const [showItem, setShowItem] = useState(false);
  const haveChildren = item.countries && item.countries.length > 0;
  const haveLang = item.languages && item.languages.length > 0;
  const changeVisibility = () => setShowItem((prev) => !prev);

  const { registerCallback, removeCallback, callbacks } = useContext(TreeContext);
  const closeItem = () => setShowItem(false);

  useEffect(() => {
    if (haveChildren) {
      registerCallback(closeItem);
      return () => {
        removeCallback(closeItem);
      };
    }
  }, []);

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
          {item.countries.map((items, index) => (
            <li
              key={items.name}
              onClick={() =>
                index === item.countries.length - 1 &&
                callbacks.forEach((c) => c())
              }
            >
              <Countries item={items} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;

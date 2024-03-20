"use client"
import React, { FC } from "react";
import "./styles/item.css";

// Definición de la interfaz para el objeto item
interface DataItem {
  titles?: string;
  titlee?: string;
  name: string;
  desc: string;
  traduc: string;
  precio: string;
  point: string;
}

// Definición de las props para el componente ItemList
interface ItemListProps {
 item: DataItem;
 index: number;
}

const ItemList: FC<ItemListProps> = ({ item, index }) => {
 return (
    <li key={index} className="items-list">
      <div className="element-container">
        <div className="title-header">
          <p>
            {" "}
            <span className="spanish-header">{item.titles}</span>{" "}
            <span className="eng-header">{item.titlee}</span>{" "}
          </p>
        </div>
        <div className="inf-info">
          <div className="inf-text">
            <p className="text-trad">
              <span className="text-trad-s">{item.name}</span>{" "}
              <span className="guion">/</span>
              <span className="text-trad-e"> {item.traduc}</span>
            </p>
            <p className="desc">{item.desc}</p>
          </div>
          <div className="points"></div>
          <div className="prize">{item.precio}</div>
        </div>
      </div>
    </li>
 );
};

export default ItemList;

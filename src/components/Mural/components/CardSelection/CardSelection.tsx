"use client"
import React from 'react';
import "./styles/card.css";

// Definición de la interfaz para los elementos del array arr
interface CardItem {
 title: string;
 names: string;
 namee: string;
}

interface CardSelectionProps {
 arr: CardItem[];
}

const CardSelection: React.FC<CardSelectionProps> = ({ arr }) => {
 return (
    <div className="second-content-container">
      <div className="second-content">
        <ul className="lists">
          {arr.map((item, index) => {
            return (
              <li className="item-list" key={index}>
                <section className="header-service">{item.title}</section>
                <div className="con-checks">
                 <div className="texts">
                    <p className="par">
                      {item.names} {item.namee}
                    </p>
                 </div>
                 <form className="checks" name="checks">
                    <input type="radio" className="radio radio1" name="checks" />
                    <input type="radio" className="radio radio2" name="checks" />
                    <input type="radio" className="radio radio3" name="checks" />
                 </form>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
 );
}

export default CardSelection;

"use client";
import React from "react";
import "./styles/mural.css";
import { data, links } from "../../../services/services";
import MyCarousel from "@/components/Mural/components/MyCarousel/MyCarousel";
import CarouselElection from "@/components/Mural/components/CarouselElection/CarouselElection";
import ItemList from "@/components/Mural/components/ItemList/ItemList";
import Background from "@/components/Mural/components/BackgroundMural/Background";
import Logo from "@/components/Mural/components/PalmaresLogoMural/Logo";
import Exhoratation from "@/components/Mural/components/Exhortation/Exhoratation";
import Link from "next/link";

interface LinkItem {
  url: string;
  name: string;
}

interface Item {
  titles: string;
  titlee: string;
  name: string;
  desc: string;
  traduc: string;
  precio: string;
  point: string;
}

interface DataItem {
  titles?: string;
  titlee?: string;
  name: string;
  desc: string;
  traduc: string;
  precio: string;
  point: string;
}

const Mural: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <div className="carousel-content">
          <MyCarousel />
        </div>
        <div className="mark-container">
          <img className="mark" src="/assets/svg/Recurso 7.svg" alt="" />
          <p className="menu-anun">Menú</p>
        </div>
        <nav className="navigation">
          <ul className="list-navigation">
            {links.map((item: LinkItem, index: number) => {
              return (
                <li className="item" key={index}>
                  <Link href={item.url} className="link">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="background">
          <Background />
          <ul className="list">
            {data.map((item: DataItem, index: number) => {
              return <ItemList key={index} item={item} index={index} />;
            })}
          </ul>
          <div className="main-container-election">
            <Exhoratation />
            <CarouselElection />
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mural;

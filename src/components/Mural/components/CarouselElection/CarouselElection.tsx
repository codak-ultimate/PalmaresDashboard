"use client"
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles/carousel.css";
import {
  serviceMural,
  local,
  alimento,
  bebidas,
} from "../../../../../services/serviceMural";
import CardSelection from "../CardSelection/CardSelection";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Definición de la interfaz para los elementos de los arrays
interface CardItem {
  title?: string;
  names: string;
  namee: string;
}
interface CardSelectionProps {
  arr: CardItem[];
}
const CarouselElection: React.FC = (): JSX.Element => {
  return (
    <Carousel
      interval={5000}
      showIndicators={false}
      showThumbs={false}
      className="cars"
      swipeable={false} // Desactiva el desplazamiento por toque
      emulateTouch={false} // Desactiva la emulación de toque
      useKeyboardArrows={true} // Habilita el uso de las flechas del teclado
      dynamicHeight={false}
     renderArrowPrev={()=>null}
       
     renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <button
            onClick={clickHandler}
            style={{
              position: 'absolute',
              top: 0,
              bottom: '300px',
              border:'none',
              background: 'transparent',
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1px',
              cursor: 'pointer',
              zIndex: 20,
            }}
          >
            <ArrowForwardIosIcon style={{ width: '34px', height: '54px',color:'green' }} />
          </button>
        )
     }
    >
      <div className="first-content">
        <div className="first-contrent-interior">
          <p className="text-enter">
            {" "}
            Escoja la opción segun su satisfacción / Choose the option according
            to your satisfaction{" "}
          </p>
          <div className="circle-content">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
          </div>
        </div>
      
      </div>
      
      <CardSelection arr={serviceMural} />
      <CardSelection arr={local} />
      <CardSelection arr={alimento} />
      <CardSelection arr={bebidas} />
    </Carousel>
  );
};

export default CarouselElection;

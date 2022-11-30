import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import './styles.css'

type SpreaderPros={
    colorClass: string
}
  
  export function Spreader(props: SpreaderPros) {
    const pageColor = localStorage.getItem("pageColor") || "purple";
    const numberOfElements = 100;
    const array = []
    for(let i = 0; i<numberOfElements; i++){
      array.push(i)
    }

    const elements = document.getElementsByClassName("element");
    function animateComponent() {
      anime({
        targets: elements,
        translateX: () => {
          return anime.random(-650, 650);
        },
        translateY: () => {
          return anime.random(-400, 400);
        },
        scaleY: () => anime.random(-2, 2),
        scaleX: () => anime.random(-2, 2),
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(100),
        loop: false,
        complete: animateComponent
      });
    }

    useEffect(() => {
      animateComponent();
    }, []);

    return (
      <div
        id="elementFather"
        className="flex items-center justify-center w-full h-full absolute overflow-hidden"
      >
        {array.map(item => {
        return <div key={item} className={`absolute element w-10 h-32 z-0 ${props.colorClass}`}></div>
        })}
      </div>
    );
  }
  

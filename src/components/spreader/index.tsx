import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

type SpreaderPros={
    colorClass: string
}
  
  export function Spreader(props: SpreaderPros) {
    const numberOfElements = 25;
    const array = []
    for(let i = 0; i<numberOfElements; i++){
      array.push(i)
    }

    const elements = document.getElementsByClassName("element");
    function animateComponent() {
      anime({
        targets: elements,
        translateX: () => {
          return anime.random(-700, 700);
        },
        translateY: () => {
          return anime.random(-500, 500);
        },
        scale: () => anime.random(1, 5),
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(10),
        loop: false,
        complete: continueAnimation
      });
    }
    function continueAnimation() {
      anime({
        targets: elements,
        translateX: () => {
          return anime.random(-700, 700);
        },
        translateY: () => {
          return anime.random(-500, 500);
        },
        scale: () => anime.random(1, 5),
        easing: "linear",
        duration: 5000,
        delay: anime.stagger(4000),
        loop: false,
        complete: continueAnimation
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
        return <div key={item} className={`absolute element w-10 h-32 z-0 ${props.colorClass} drop-shadow-xl`}></div>
        })}
      </div>
    );
  }
  

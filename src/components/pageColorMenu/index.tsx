import { motion} from 'framer-motion'
import { Square, Circle, Star, Hexagon, Palette, PaintBucket } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'

type pageColorMenuProps ={
    setPageColor: Dispatch<SetStateAction<string>>
}

export function PageColorMenu(props: pageColorMenuProps) {
    const [pageColor, setPageColor] = useState(localStorage.getItem('pageColor') || 'purple')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleClick(color: string){
        setPageColor(color)
        localStorage.setItem('pageColor', color)
        props.setPageColor(color)
        setIsMenuOpen(false)
    }
    return (
      <>
        {!isMenuOpen ? (
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: '20px' }}
            className={`h-fit w-fit absolute top-5 right-1/2 translate-x-1/2`}
          >
            <PaintBucket
              onClick={() => setIsMenuOpen(true)}
              size={40}
              weight="duotone"
              className=" text-purple-100"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: "12vh" }}
            exit={{ top: 0 }}
            className={`flex items-center justify-between gap-6 ${
              isMenuOpen && "absolute top-[12vh] right-1/2 translate-x-1/2"
            }`}
          >
            <div onClick={() => handleClick("purple")}>
              <Circle
                size={25}
                weight="fill"
                className={`text-purple-400 ${
                  pageColor === "purple"
                    ? "cursor-auto"
                    : "cursor-pointer hover:brightness-75"
                }`}
              />
            </div>
            <div onClick={() => handleClick("blue")}>
              <Star
                size={25}
                weight="fill"
                className={`text-blue-400 ${
                  pageColor === "blue"
                    ? "cursor-auto"
                    : "cursor-pointer hover:brightness-75"
                }`}
              />
            </div>
            <div onClick={() => handleClick("green")}>
              <Square
                size={25}
                weight="fill"
                className={`text-green-400 ${
                  pageColor === "green"
                    ? "cursor-auto"
                    : "cursor-pointer hover:brightness-75"
                }`}
              />
            </div>
            <div onClick={() => handleClick("red")}>
              <Hexagon
                size={25}
                weight="fill"
                className={`text-red-400 ${
                  pageColor === "red"
                    ? "cursor-auto"
                    : "cursor-pointer hover:brightness-75"
                }`}
              />
            </div>
          </motion.div>
        )}
      </>
    );
}
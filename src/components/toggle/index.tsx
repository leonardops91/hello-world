import { MoonStars, Sun } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react';

type toggleProps = {
    setPageTheme: Dispatch<SetStateAction<string>>
    pageColor: string
}

type colorStylesType = {
  [key: string]: {[key: string]: string}
}

const colorsStyles: colorStylesType = {
  light: {
    purple: "bg-purple-900 text-purple-100",
    blue: "bg-blue-900 text-blue-100",
    green: "bg-green-900 text-green-100",
    red: "bg-red-900 text-red-100",
  },
  dark: {
    purple: "bg-purple-400 text-purple-100",
    blue: "bg-blue-400 text-blue-100",
    green: "bg-green-400 text-green-100",
    red: "bg-red-400 text-red-100",
  },
};

export function Toggle(props: toggleProps){
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const colorClass = colorsStyles[theme][props.pageColor]

    function handleTheme(theme: string) {
        setTheme(theme)
        localStorage.setItem('theme', theme)
        props.setPageTheme(theme)
    }
    return (
      <div
        className={`
      flex 
      items-center 
      justify-between 
      border-2
      border-purple-100 
      rounded-full
      h-11
      `}
      >
        {theme === "light" ? (
          <div
            onClick={() => handleTheme("dark")}
            className={`flex items-center  h-full w-full rounded-full p-3   ${colorClass}
          }`}
          >
            <MoonStars size={34} className="text-purple-100" />
          </div>
        ) : (
          <div
            onClick={() => handleTheme("light")}
            className={`flex items-center  h-full w-full rounded-full p-3 ${colorClass}`}
          >
            <Sun size={34} className="text-purple-100" />
          </div>
        )}
      </div>
    );
}
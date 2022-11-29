import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "../link";
import { Toggle } from "../toggle";

type headerProps ={
    setGeneralTheme: Dispatch<SetStateAction<string>>
    pageColor: string
}

export default function Header(props: headerProps) {
    return (
      <section className="relative flex items-center border-b-2  border-purple-100 h-[10vh] max-w-[80%] w-full m-auto z-10">
        <nav className=" flex items-center justify-between w-full">
          <Link content="About" href={"about"} pageColor={props.pageColor} />
          <Link
            content="Education"
            href="education"
            pageColor={props.pageColor}
          />

          <Link
            content="Projects"
            href="projects"
            pageColor={props.pageColor}
          />
          <Link content="Contact" href="contact" pageColor={props.pageColor} />
        </nav>
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <Toggle
            setPageTheme={props.setGeneralTheme}
            pageColor={props.pageColor}
          />
        </div>
      </section>
    );
}
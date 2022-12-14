import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "../link";
import MenuToggle from "../menuToggle";
import { PageColorMenu } from "../pageColorMenu";
import { Toggle } from "../toggle";

type headerProps = {
  setPageColor: Dispatch<SetStateAction<string>>
  setGeneralTheme: Dispatch<SetStateAction<string>>;
  pageColor: string;
};


export default function Header(props: headerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <section className="fixed flex items-center h-fit w-screen backdrop-blur-md bg-black bg-opacity-50  z-20">
      <div className="relative flex items-center justify-between border-b-2 border-purple-100 h-16 max-w-[80%] w-full m-auto">
        <Toggle
          setPageTheme={props.setGeneralTheme}
          pageColor={props.pageColor}
        />
        <PageColorMenu setPageColor={props.setPageColor}/>
        <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      </div>
      <nav
        onClick={(e) => e.stopPropagation}
        className={`absolute top-0 lg:top-5 right-0 flex flex-col lg:flex-row gap-4 items-center justify-center h-screen lg:h-fit w-[80vw] lg:w-fit transition-all ${
          isMenuOpen
            ? "justify-start  bg-red-900"
            : "-right-[100%] lg:right-[10%]"
        }`}
      >
        <Link content="About" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center" href={"about"} pageColor={props.pageColor} />
        <Link
          content="Education" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center"
          href="education"
          pageColor={props.pageColor}
        /> 

        <Link content="Projects" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center" href="projects" pageColor={props.pageColor} />
        <Link content="Contact" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center" href="contact" pageColor={props.pageColor} />
      </nav>
    </section>
    // <section className="fixed h-fit w-screen">
    //   <div className="w-[80%] border-2 border-black m-auto h-[10vh]">
    //     <nav className="w-fit border-2 bg-red-900"></nav>
    //   </div>
    // </section>
  );
}

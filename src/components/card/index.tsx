import { m } from "framer-motion";
import { Share } from "phosphor-react";
import { animationVariants } from "../../utils/animationVariants";
import { Text } from "../textComponent";

type CardProps = {
    title: string
    previewURL?: string
    repositoryURL: string
    snapURL?: string
    type: string
    description: string
    technologies?: string[]
}

export default function Card(props: CardProps) {
    return (
      <m.div
        variants={animationVariants}
        initial={"offScreenLeft"}
        whileInView="onScreen"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        id="card"
        className={`group flex flex-col lg:flex-row items-center lg:max-h-48 h-full border-2 w-full justify-between transition-all duration-[.25s] ease-linear overflow-hidden relative rounded-lg`}
      >
        <div className="relative w-full h-full lg:h-48 lg:w-80 aspect-video flex items-center justify-center">
          <img
            src={
              props.snapURL ||
              "https://geekflare.com/wp-content/uploads/2022/03/WhydoyouneedmockAPI.jpeg"
            }
            alt="image example"
            className="h-full lg:h-48 lg:w-80 aspect-video transition-all duration-[.25s] ease-linear "
          />
          {props.previewURL && (
            <a
              target="_blanck"
              rel="noopener noreferrer"
              href={props.previewURL}
              className="flex items-center justify-center gap-1 absolute w-2/3 p-2 rounded-sm bg-opacity-70 bg-black text-white cursor-pointer transition-all ease-linear text-sm outline-none lg:opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              Go to preview
              <Share />
            </a>
          )}
        </div>
        <div
          id="context"
          className="flex flex-col items-center lg:flex-row lg:items-start justify-between  gap-7 py-4 px-6 h-full w-full lg:h-48 transition-all text-white  bg-black bg-opacity-70"
        >
          <div className="flex gap-4 flex-col h-full w-full">
            <header className="flex gap-3 items-center justify-center lg:justify-start w-full">
              <Text
                variant="subtitle"
                content={props.title}
                className=""
              />{" "}
              -
              <Text variant="subtitle" content={props.type} />
            </header>
            <Text
              variant="bold"
              content={props.description}
              className="text-center lg:text-start "
            />
          </div>
          <main className="text-start flex gap-1 flex-col items-end justify-center w-fit h-full transition-all duration-[.25s] ease-linear">
            <a
              target="_blanck"
              rel="noopener noreferrer"
              href={props.repositoryURL}
              className="w-52 py-3 px-6 rounded-xl bg-transparent border-2 mt-3 cursor-pointer transition-all duration-[.25s] ease-linear text-sm text-center outline-none hover:bg-white hover:text-black"
            >
              Go to repository
            </a>
          </main>
        </div>
      </m.div>
    );
}
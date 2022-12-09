import { m } from "framer-motion";
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
        whileHover={{scale: 1.02}}
        viewport={{ once: true }}
        id="card"
        className={`group flex items-center max-h-48 h-full w-full justify-between transition-all duration-[.25s] ease-linear overflow-hidden relative rounded-lg`}
      >
        <img
          src={
            props.snapURL ||
            "https://geekflare.com/wp-content/uploads/2022/03/WhydoyouneedmockAPI.jpeg"
          }
          alt="image example"
          className="h-48 w-80 transition-all duration-[.25s] ease-linear "
        />
        <div
          id="context"
          className="flex items-start justify-between  gap-7 py-4 px-6 w-full h-48 transition-all text-white  bg-black bg-opacity-70"
        >
          <div className="flex gap-4 flex-col h-full w-full">
            <header className="flex gap-3 items-center justify-start w-full text-center">
              <Text
                variant="subtitle"
                content={props.title}
                className="w-max"
              />{" "}
              -
              <Text variant="subtitle" content={props.type} className="w-min" />
            </header>
            <Text
              variant="bold"
              content={props.description}
              className="text-start h-9"
            />
          </div>
          <main className="text-start flex gap-1 flex-col items-end justify-center w-fit h-full transition-all duration-[.25s] ease-linear">
              <a
                target="_blanck"
                rel="noopener noreferrer"
                href={props.repositoryURL}
                className="w-52 py-3 px-6 rounded-xl bg-transparent border-2 mt-3 cursor-pointer transition-all duration-[.25s] ease-linear text-sm text-center outline-none hover:bg-white hover:text-black"
              >
                Acessar o repositório
              </a>
              {props.previewURL && (
                <a
                  target="_blanck"
                  rel="noopener noreferrer"
                  href={props.previewURL}
                  className="w-52 py-3 px-6 rounded-xl bg-transparent border-2 mt-3  cursor-pointer transition-all duration-[.25s] ease-linear text-sm text-center outline-none hover:bg-white hover:text-black"
                >
                  Acessar o preview
                </a>
              )}
          </main>
        </div>
      </m.div>
    );
}
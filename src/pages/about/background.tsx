import { Strategy } from "phosphor-react";
import { Text } from "../../components/textComponent";
import { m } from 'framer-motion'
import { animationVariants } from "../../utils/animationVariants";

type BackgroundProps = {
    careerDescription?: string
}

export default function Background(props: BackgroundProps){
    return (

      <div className="flex flex-col w-full items-baseline">
        <m.header
          
          variants={animationVariants}
          initial="offScreenLeft"
          whileInView="onScreen"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 w-full mb-4"
        >
          <Strategy size={32} />
          <Text
            variant="subtitle"
            content="Background"
            className="text-center"
          />
        </m.header>
        <m.main
          
          variants={animationVariants}
          initial="offScreenLeft"
          whileInView="onScreen"
          viewport={{ once: true }}
          className="w-full rounded-md backdrop-blur-sm bg-gray-300 bg-opacity-50 text-center py-4 px-2 "
        >
          <Text variant="bold" content={props.careerDescription} />
        </m.main>
      </div>

    );
}
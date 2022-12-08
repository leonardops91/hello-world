import { motion } from "framer-motion";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery} from "../../graphql/generated";
import { animationVariants } from "../../utils/animationVariants";

type ContactProps = {
  pageColor: string;
  themeClass: string
  data?: GetUserInfoQuery;
  id: string;
};

type contactType = {
  socialNetworks?: { 
    name: string
    url: string
  }[];
  objective?: string
};

type colorsStylesType = {
  [key: string]: string;
};

const colorsStyles: colorsStylesType = {
 purple:
   "before:bg-purple-900 bg-purple-900 text-purple-100",
 blue: "before:bg-blue-900 bg-blue-900 text-blue-100",
 green:
   "before:bg-green-900 bg-green-900 text-green-100",
 red: "before:bg-red-900 bg-red-900 text-red-100",
};

export default function Contact(props: ContactProps){
  const colorClass = colorsStyles[props.pageColor];
  
  const contactInfo: contactType = {
    socialNetworks: props.data?.socialNetworks,
    objective: props.data?.userProfile?.objective
  };
  return (
    <section
      id={props.id}
      className={`bg-nature bg-no-repeat bg-cover min-h-[93vh] h-fit before:absolute before:w-full before:h-[93vh] ${colorClass} ${props.themeClass} `}
    >
      <div
        className={`flex flex-col justify-center items-center py-6 relative text-center max-w-[80%] w-full m-auto min-h-[90vh] h-fit border-b-1 `}
      >
        <div className="flex flex-col mb-4">
          <header className="flex items-center justify-center mb-6">
            <Text
              variant="title"
              content="Future"
              className="backdrop-blur-sm bg-gray-900 bg-opacity-50"
            />
          </header>
          <motion.main
            layoutId="animateArive"
            variants={animationVariants}
            initial="offScreenLeft"
            whileInView="onScreen"
            viewport={{ once: true }}
            className="flex justify-center h-full w-full"
          >
            <Text content={contactInfo.objective} />
          </motion.main>
        </div>
        <Text
          variant="title"
          content="Contact"
          className="mb-6 backdrop-blur-sm bg-gray-900 bg-opacity-50"
        />
        <div className="flex justify-center gap-7  items-start flex-row">
          {contactInfo.socialNetworks && (
            <>
              <motion.a
                layoutId="animateArive"
                variants={animationVariants}
                initial="offScreenLeft"
                whileInView="onScreen"
                viewport={{ once: true }}
                href={contactInfo.socialNetworks[0].url}
                target="_blank"
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <LinkedinLogo size={32} />
                <Text
                  variant="subtitle"
                  content="LinkedIn"
                  className="hidden md:block"
                />
              </motion.a>
              <motion.a
                initial={{opacity: 0}}
                whileInView={{opacity: 100, transition: {delay: 1}}}
                viewport={{ once: true }}
                href={contactInfo.socialNetworks[1].url}
                target="_blank"
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <GithubLogo size={32} />
                <Text
                  variant="subtitle"
                  content="Github"
                  className="hidden md:block"
                />
              </motion.a>
              <motion.a
                layoutId="animateArive"
                variants={animationVariants}
                initial="offScreenRight"
                whileInView="onScreen"
                viewport={{ once: true }}
                href={contactInfo.socialNetworks[2].url}
                target="_blank"
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <InstagramLogo size={32} />
                <Text
                  variant="subtitle"
                  content="Instagram"
                  className="hidden md:block"
                />
              </motion.a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

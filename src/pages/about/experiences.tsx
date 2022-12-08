import { format } from "date-fns";
import { motion } from "framer-motion";
import { Flask } from "phosphor-react";
import { Text } from '../../components/textComponent'
import { animationVariants } from "../../utils/animationVariants";

type ExperiencesProps = {
    experiences?: {
        companyDescription: string;
        companyName: string;
        position: string;
        startDate: Date;
        endDate?: Date | undefined;
        technologies: {
            name: string;
        }[];
    }[] | undefined
}

export default function Experiences(props: ExperiencesProps) {
    return (
      <div className="flex flex-col w-full items-baseline">
        <motion.header
          
          variants={animationVariants}
          initial="offScreenLeft"
          whileInView="onScreen"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 w-full mb-4"
        >
          <Flask size={32} />
          <Text variant="subtitle" content="IT Experience" />
        </motion.header>
        <main className="flex gap-4 w-full">
          <ul className="flex gap-4 flex-col-reverse w-full">
            {props.experiences?.map((experience, index) => {
              return (
                <motion.li
                  
                  variants={animationVariants}
                  initial={index%2===0 ? "offScreenLeft" : "offScreenLeft"}
                  whileInView="onScreen"
                  viewport={{ once: true }}
                  key={experience.startDate.toString()}
                  className="flex flex-col gap-1 justify-center w-full backdrop-blur-md bg-gray-300 bg-opacity-50 rounded-md py-4 px-2"
                >
                  <header className="flex flex-col gap-1 w-full">
                    <Text variant="subtitle" content={experience.companyName} />
                    <Text
                      variant="small"
                      content={experience.companyDescription}
                    />
                  </header>
                  <main className="flex flex-col">
                    <div className="flex flex-col items-center">
                      Position
                      <Text variant="small" content={experience.position} />
                    </div>
                    <div className="flex flex-col items-center">
                      Period
                      <div className="flex gap-1">
                        <Text
                          variant="small"
                          content={format(
                            new Date(experience.startDate.toString()),
                            "MMMM/yyyy"
                          )}
                        />
                        -
                        <Text
                          variant="small"
                          content={
                            experience.endDate
                              ? format(
                                  new Date(
                                    experience.endDate?.toString() || ""
                                  ),
                                  "MMMM/yyyy"
                                )
                              : "Current"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      Technologies
                      <div className="flex gap-1 flex-wrap items-center justify-center">
                        {experience.technologies.map((technology) => {
                          return (
                            <Text
                              key={technology.name}
                              variant="small"
                              content={`${technology.name}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </main>
                </motion.li>
              );
            })}
          </ul>
        </main>
      </div>
    );
}
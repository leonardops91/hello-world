import { format } from "date-fns";
import { Student } from "phosphor-react";
import { Text } from "../../components/textComponent";
import { motion } from 'framer-motion'
import { animationVariants } from "../../utils/animationVariants";

type EducationDegreesProps = {
    education?: {
        name: string;
        institute: string;
        initialDate: Date;
        endDate?: Date | undefined;
    }[] | undefined
}

export default function EducationDegrees(props: EducationDegreesProps) {
  return (
    <div className="flex flex-col w-full items-center">
      <motion.header
        
        variants={animationVariants}
        initial="offScreenLeft"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 w-full mb-4"
      >
        <Student size={32} />
        <Text variant="subtitle" content="General Education" />
      </motion.header>
      <main className="flex flex-col-reverse gap-4 w-full">
        <ul className="flex gap-4 flex-col-reverse">
          {props.education?.map((course, index) => {
            return (
              <motion.li
                
                variants={animationVariants}
                initial={index % 2 === 0 ? "offScreenRight" : "offScreenLeft"}
                whileInView="onScreen"
                viewport={{ once: true }}
                key={course.name}
                className="flex gap-1 flex-col items-center py-4 justify-center w-full rounded-md backdrop-blur-sm bg-gray-300 bg-opacity-50"
              >
                <header>
                  <Text variant="bold" content={course.name} />
                </header>
                <main className="flex gap-1 flex-col items-center justify-center md:flex-row">
                  <Text
                    variant="small"
                    content={course.institute}
                    className="text-center"
                  />
                  <div className="flex items-center  gap-1">
                    (
                    <Text
                      variant="small"
                      content={format(
                        new Date(course.initialDate),
                        "MMMM/yyyy"
                      )}
                      className="text-center"
                    />
                    -
                    <Text
                      variant="small"
                      content={
                        format(
                          new Date(course.endDate?.toString() || ""),
                          "MMMM/yyyy"
                        ) || "current"
                      }
                      className="text-center"
                    />
                    )
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

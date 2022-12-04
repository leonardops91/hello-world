import { format } from "date-fns";
import { motion } from "framer-motion";
import { NotePencil } from "phosphor-react";
import { animationVariants } from "../../utils/animationVariants";
import { Text } from '../../components/textComponent/index'

type EducationProps ={
    courses?: {
        name: string;
        institute: string;
        startDate: Date;
        endDate?: Date | undefined;
        workload?: number | null | undefined;
    }[]
}

export default function Courses(props: EducationProps){
    return (
      <div>
        <Text
          variant="title"
          content="IT Education"
          className="mb-6 backdrop-blur-sm bg-gray-900 bg-opacity-50"
        />
        <div className="flex flex-col items-center w-full">
          <motion.header
            layoutId="animateArive"
            variants={animationVariants}
            initial="offScreenLeft"
            whileInView="onScreen"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <NotePencil size={32} />
            <Text variant="subtitle" content="Main IT courses" />
          </motion.header>
          <main className="w-full">
            <motion.ul className="flex flex-col items-center gap-4 w-full">
              {props.courses?.map((course, index) => {
                return (
                  <motion.li
                    layoutId="animateArive"
                    variants={animationVariants}
                    initial={
                      index % 2 === 0 ? "offScreenRight" : "offScreenLeft"
                    }
                    whileInView="onScreen"
                    viewport={{ once: true }}
                    key={course.name}
                    className="w-full flex flex-col gap-2 rounded-md py-4 backdrop-blur-sm bg-gray-900 bg-opacity-50"
                  >
                    <header className="flex gap-1">
                      <Text
                        variant="bold"
                        content={course.name}
                        className="w-full text-center"
                      />
                    </header>
                    <main className="flex flex-col items-center gap-1">
                      <Text variant="small" content={course.institute} />
                      <div className="flex gap-1">
                        (
                        <Text
                          variant="small"
                          content={format(
                            new Date(course.startDate.toString()),
                            "MMMM/yyyy"
                          )}
                        />
                        -
                        <Text
                          variant="small"
                          content={format(
                            new Date(course.endDate?.toString() || ""),
                            "MMMM/yyyy"
                          )}
                        />
                        )
                      </div>
                      <Text
                        variant="small"
                        content={`${course.workload?.toString()}h`}
                      />
                    </main>
                  </motion.li>
                );
              })}
            </motion.ul>
          </main>
        </div>
      </div>
    );
}
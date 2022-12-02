import { format } from "date-fns";
import { DesktopTower, NotePencil } from "phosphor-react";
import { useEffect, useState } from "react";
import ReloadButton from "../../components/reloadButton";
import { Text } from "../../components/textComponent";
import WordCloud from "../../components/wordCloud";
import { GetUserInfoQuery } from "../../graphql/generated";
import { motion } from "framer-motion";
import { animationVariants } from "../../utils/animationVariants";

type EducationProps = {
  pageColor: string;
  themeClass: string;
  data?: GetUserInfoQuery;
  id: string;
};

type EducationType = {
  courses?: {
    name: string,
    institute: string
    startDate: Date
    endDate?: Date
    workload?: number | null
  }[]
  technologies?: {
    name:string
    knowledgeLevel: number
  }[]
}

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

export default function Education(props: EducationProps){
  const [reloadCloud, setReloadCloud] = useState(true)
  const colorClass = colorsStyles[props.pageColor];

  const educationInfo: EducationType = {
    courses: props.data?.courses,
    technologies: props.data?.technologies,
  };

  useEffect(() => {
    setReloadCloud(!reloadCloud)
  }, [])
    return (
      <section
        id={props.id}
        className={`bg-space bg-no-repeat bg-cover before:absolute before:w-full before:min-h-[110vh] before:h-full ${colorClass} ${props.themeClass} `}
      >
        <div
          className={`flex gap-4 flex-col py-6 relative max-w-[80%] w-full m-auto min-h-[110vh] h-fit`}
        >
          <Text variant="title" content="IT Education" className="mb-1" />
          <div className="flex flex-col items-start w-full">
            <header className="flex items-center justify-center gap-3 ">
              <NotePencil size={32} />
              <Text variant="subtitle" content="Main IT courses" />
            </header>
            <main className="w-full">
              <motion.ul
                variants={animationVariants}
                initial="offScreenLeft"
                whileInView="onScreen"
                viewport={{ once: true }}
                className="flex flex-col gap-4 backdrop-blur-sm w-full backdrop-brightness-95"
              >
                {educationInfo.courses?.map((course) => {
                  return (
                    <motion.li
                      variants={animationVariants}
                      initial="offScreenLeft"
                      whileInView="onScreen"
                      viewport={{ once: true }}
                      key={course.name}
                      className="flex flex-col gap-2 lg:flex-row"
                    >
                      <header className="flex gap-1">
                        <Text variant="bold" content={course.name} />
                      </header>
                      <main className="flex gap-1">
                        <Text variant="small" content={course.institute} />
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
          <div className="flex flex-col items-start h-[60%]">
            <header className="flex items-center justify-center gap-3 ">
              <DesktopTower size={32} />
              <Text variant="subtitle" content="Knowledge Cloud" />
            </header>
            <main
              className={`relative flex items-center justify-center h-full w-full `}
            >
              <WordCloud
                pageColor={props.pageColor}
                data={educationInfo.technologies}
              />
            </main>
          </div>
        </div>
      </section>
    );
}

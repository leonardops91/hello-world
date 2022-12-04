import { GetUserInfoQuery } from "../../graphql/generated";
import Courses from "./courses";
import KnowledgeCloud from "./knowledgeCloud";

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
  const colorClass = colorsStyles[props.pageColor];

  const educationInfo: EducationType = {
    courses: props.data?.courses,
    technologies: props.data?.technologies,
  };

    return (
      <section
        id={props.id}
        className={`bg-space bg-no-repeat bg-cover before:absolute before:w-full before:min-h-[110vh] before:h-full ${colorClass} ${props.themeClass} `}
      >
        <div
          className={`flex gap-4 flex-col py-6 relative max-w-[80%] w-full m-auto min-h-[110vh] h-fit`}
        >
          <Courses courses={educationInfo.courses} />
          <KnowledgeCloud
            pageColor={props.pageColor}
            technologies={educationInfo.technologies}
          />
        </div>
      </section>
    );
}

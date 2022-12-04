import { Strategy, Student, Flask } from "phosphor-react";
import { Spreader } from "../../components/spreader";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import { format } from 'date-fns'
import {motion, Variants} from 'framer-motion'
import EducationDegrees from "./educationDegrees";
import Experiences from "./experiences";
import Background from "./background";

type AboutProps = {
  colorClass: string
  data?: GetUserInfoQuery;
  id: string;
};

type AboutType = {
  careerDescription?: string;
  education?: {
    name: string;
    institute: string;
    initialDate: Date;
    endDate?: Date;
  }[];
  experiences?: {
    companyDescription: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    technologies: {
      name: string;
    }[];
  }[];
};

export default function About(props: AboutProps) {

  const userBackground: AboutType = {
    careerDescription: props.data?.userProfile?.careerdescription,
    education: props.data?.educationDegrees,
    experiences: props.data?.experiences,
  };

  return (
    <div className="relative w-full h-full">
      <section
        id="about"
        className={`container flex flex-col gap-6 items-center relative max-w-[80%] w-full m-auto min-h-[110vh] h-fit py-6 `}
      >
        <Text variant="title" content="About" className="text-center backdrop-blur-sm bg-gray-300 bg-opacity-50" />
        <Background careerDescription={userBackground.careerDescription}/>
        <EducationDegrees education={userBackground.education} />
        <Experiences experiences={userBackground.experiences}/>
      </section>
    </div>
  );
}

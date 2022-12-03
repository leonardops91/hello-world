import { Strategy, Student, Flask } from "phosphor-react";
import { Spreader } from "../../components/spreader";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import { format } from 'date-fns'
import {motion, Variants} from 'framer-motion'

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
      <Spreader colorClass={props.colorClass} />
      <section
        id="about"
        className={`container flex flex-col gap-4 items-center relative max-w-[80%] w-full m-auto min-h-[110vh] h-fit py-6 `}
      >
        <Text variant="title" content="About" className="text-center backdrop-blur-sm bg-gray-300 bg-opacity-50" />
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4 w-full mb-4">
            <Strategy size={32} />
            <Text variant="subtitle" content="Background" className="text-center" />
          </header>
          <main className="w-full rounded-md backdrop-blur-sm bg-gray-300 bg-opacity-50 text-center py-4 px-2 ">
            <Text variant="bold" content={userBackground.careerDescription} />
          </main>
        </div>
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4 w-full mb-4">
            <Student size={32} />
            <Text variant="subtitle" content="General Education" />
          </header>
          <main className="flex flex-col-reverse gap-4 w-full">
            <ul className="flex gap-4 flex-col-reverse py-4">
              {userBackground.education?.map((course) => {
                return (
                  <li key={course.name} className="flex gap-1 flex-col items-center justify-center w-full rounded-md backdrop-blur-sm bg-gray-300 bg-opacity-50">
                    <header>
                      <Text variant="bold" content={course.name} />
                    </header>
                    <main className="flex gap-1 flex-col md:flex-row">
                      <Text variant="small" content={course.institute} className='text-center' />
                      <div className="flex gap-1">
                        (
                        <Text
                          variant="small"
                          content={format(
                            new Date(course.initialDate),
                            "MMMM/yyyy"
                          )} className='text-center'
                        />{" "}
                        -{" "}
                        <Text
                          variant="small"
                          content={format(
                            new Date(course.endDate?.toString() || ""),
                            "MMMM/yyyy"
                          ) || 'current'} className='text-center'
                        />
                        )
                      </div>
                    </main>
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
        <div className="flex flex-col w-full items-baseline">
          <header className="flex items-center justify-center gap-4 w-full mb-4">
            <Flask size={32} />
            <Text variant="subtitle" content="IT Experience" />
          </header>
          <main className="flex gap-4 w-full">
            <ul className="flex gap-4 flex-col-reverse w-full">
              {userBackground.experiences?.map((experience) => {
                return (
                  <li
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
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
      </section>
    </div>
  );
}

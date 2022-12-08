import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import Slider from '../../components/slider/index.js'
import Card from "../../components/card";

type ProjectsProps = {
  data: GetUserInfoQuery;
  id: string;
};

type projectsType = {
  projects:{
    name: string;
    projectRepositoryURL: string;
    projectpreviewURL?: string | null;
    snapURL?: string | null;
    type: string;
    description: string;
  }[]
};

export default function Projects(props: ProjectsProps){
  const projectsInfo: projectsType = {
    projects: props.data.projects
  }
    return (
      <section
        id={props.id}
        className="max-w-[80%] w-full m-auto h-[110vh] pb-6 pt-[16vh] flex flex-col items-center "
      >
        <div className="flex gap-4 flex-col items-center max-w-screen-xl w-full h-[80%]">
          <header className="w-full">
            <Text variant="title" content="Projects" className="backdrop-blur-sm bg-gray-300 bg-opacity-50" />
          </header>
          <main className="xl:grid gap-4 xl:grid-cols-2 xl:h-[100%] w-fit overflow-auto  flex flex-col">
            {projectsInfo.projects.map(cardInfo => {
                return <Card key={cardInfo.name} snapURL={cardInfo.snapURL || ""} title={cardInfo.name} type={cardInfo.type} description={cardInfo.description} repositoryURL={cardInfo.projectRepositoryURL} previewURL={cardInfo.projectpreviewURL || ""}  />
            })}
            </main>
        </div>
      </section>
    );
}


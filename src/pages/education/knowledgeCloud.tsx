import { DesktopTower } from "phosphor-react";
import WordCloud from "../../components/wordCloud";
import { Text } from '../../components/textComponent/index'

type KnowledgeCloudProps = {
    pageColor: string,
    technologies?: {
        name: string;
        knowledgeLevel: number;
    }[]
}

export default function KnowledgeLevel(props: KnowledgeCloudProps) {
    return (
      <div className="flex flex-col items-center h-[60%]">
        <header className="flex items-center justify-center gap-3 mb-4">
          <DesktopTower size={32} />
          <Text variant="subtitle" content="Knowledge Cloud" />
        </header>
        <main
          className={`relative flex items-center justify-center h-full w-full `}
        >
          <WordCloud pageColor={props.pageColor} data={props.technologies} />
        </main>
      </div>
    );
}

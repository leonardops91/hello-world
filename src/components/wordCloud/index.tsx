import { Tag2Cloud } from "./tag2Cloud";
import Mask from "./cloud.png";
import ReloadButton from "../reloadButton";
import { useEffect, useState } from "react";

type WordCloudProps = {
  pageColor: string
  data?: {
    name: string
    knowledgeLevel: number
  }[]
}

type CloudDataType = {
  text: string,
  weight: number
}[]

export default function WordCloud(props: WordCloudProps) {
  const cloud = document.getElementById("cloud");
  const [reloadCloud, setReloadCloud] = useState(true)

  if(cloud && props.data){
    const tag2Cloud = new Tag2Cloud(cloud, {
      width: window.screen.width < 512 ? window.screen.width : window.screen.width*0.8,
      height: window.screen.height*0.9,
      minFontSize: window.screen.width < 512 ? window.screen.width/30 : window.screen.width/60,
      maxFontSize: window.screen.width < 512 ? window.screen.width/9 : window.screen.width/18,
      angleCount: 3,
      angleFrom: 0,
      angleTo: 0,
      padding: 2,
      canvas: false,
      
    });
    const cloudData: CloudDataType = props.data.map(item => {
      return{text: item.name, weight: item.knowledgeLevel}
    })

    if(reloadCloud){
      tag2Cloud.destroy()
      setReloadCloud(!reloadCloud)
    }
    tag2Cloud.draw(cloudData);

  }
  useEffect(() => {
    window.screen.orientation.addEventListener("change", () => {
      console.log("Reloading cloud")
      
      setReloadCloud(!reloadCloud)})
  }, []);
  return (
    <>
      <div
        className={`flex items-center justify-center w-fit h-fit backdrop-blur-md bg-gray-300 bg-opacity-50 ${reloadCloud}`}
      >
        <div id="cloud" className="w-full h-full"></div>
        <ReloadButton
          id="reloadCloud"
          pageColor={props.pageColor}
          onClick={() => setReloadCloud(!reloadCloud)}
        />
      </div>
    </>
  );
  }
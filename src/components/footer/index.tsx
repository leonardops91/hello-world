import { Rocket, Translate } from "phosphor-react";
import { useState } from "react";
import Modal from "../modal";
import { Text } from "../textComponent";

type footerProps = {
    pageColor: string
}

export default function Footer(props: footerProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleClick() {
        
        
    }
    return (
      <section className="h-[10vh]">
        <div className="flex items-center justify-center lg:justify-between max-w-[80%] w-full m-auto h-full border-t-2 border-purple-100">
          <Text
            variant="subtitle"
            content="Wanna know how this was built?" className="hidden lg:flex"
          />
          <div className={`transition-all duration-[.3s] ease-linear ${isModalOpen && " -translate-y-16 opacity-0"}`}>
            <Rocket
              size={32}
              onClick={() => setIsModalOpen(!isModalOpen)}
              className={`animate-bounce cursor-pointer`}
            />
          </div>
          <Text variant="subtitle" content="Developed by | Leonardo Souza"  className="hidden lg:flex"/>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </section>
    );
}
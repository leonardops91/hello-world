import InputText from '../inputText';
import {Text} from '../textComponent'


export default function ContactForm() {
    const theme = localStorage.getItem('theme') || 'dark'
    return (
      <div className={`flex flex-col gap-2 p-4 max-w-xl rounded-md ${theme === "dark" ? 'backdrop-blur-sm' : 'backdrop-blur-md'} bg-gray-100 bg-opacity-30`}>
        <Text content="What about to send me a message? Let's talk" variant='subtitle' />
        <form className="flex gap-4 flex-col items-center">
            <InputText type='text' id='name' label='Name' required />
            <InputText type='email' id='email' label='E-mail' required />
            <InputText type='textarea' id='message' label='Message' required />
          <button className="border-2 hover:contrast-150 py-1 px-4 rounded-md">Enviar</button>
        </form>
      </div>
    );
}
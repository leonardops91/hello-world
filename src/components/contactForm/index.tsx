import InputText from '../inputText';
import {Text} from '../textComponent'


export default function ContactForm() {
    return (
      <div className="flex flex-col gap-2 p-4 border-2 max-w-xl rounded-md">
        <Text content="What about to send me a message? Let's talk" variant='subtitle' />
        <form className="flex gap-4 flex-col items-center">
            <InputText type='text' id='name' label='Name' required />
            <InputText type='text' id='email' label='E-mail' required />
            <InputText type='textarea' id='message' label='Message' required />
          <button>Enviar</button>
        </form>
      </div>
    );
}
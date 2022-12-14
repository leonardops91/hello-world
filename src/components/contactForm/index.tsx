import { FormEvent, useState } from 'react';
import InputText from '../inputText';
import { Text } from "../textComponent";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
    const theme = localStorage.getItem('theme') || 'dark'
    const [isLoading, setIsLoaging] = useState(false)
    const [isEmailSent, setIsEmailSent] = useState(false)
    const [isEmailError, setIsEmailError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    function handleSubmit(e: FormEvent){
      e.preventDefault()
      setIsLoaging(true)
      const templateParams = {
        from_name: name,
        email: email,
        subject: subject,
        message: message,
      }

      emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((resp) => {
        console.log(resp.status, resp.text);
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setIsEmailSent(true)
        setIsLoaging(false)
      }, (error) => {
        console.log("Error: " + error);
        setIsEmailError(true)
        setIsLoaging(false)
       })
    }
    return (
      <div
        className={`flex flex-col gap-2 p-4 max-w-xl rounded-md ${
          theme === "dark" ? "backdrop-blur-sm" : "backdrop-blur-md"
        } bg-gray-100 bg-opacity-30`}
      >
        <Text
          content="What about to send me a message? Let's talk"
          variant="subtitle"
        />
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 flex-col items-center"
        >
          <InputText
            setValue={setName}
            value={name}
            type="text"
            id="name"
            label="Name"
            required
          />
          <InputText
            setValue={setEmail}
            value={email}
            type="email"
            id="email"
            label="E-mail"
            required
          />
          <InputText
            setValue={setSubject}
            value={subject}
            type="subject"
            id="subject"
            label="Subject"
            required
          />
          <InputText
            setValue={setMessage}
            value={message}
            type="textarea"
            id="message"
            label="Message"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`disabled:bg-gray-400 border-2 hover:contrast-150 py-1 px-4 rounded-md
          `}
          >
            {isLoading ? (
              <span className={`animate-ping px-4`}>...</span>
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </form>
        {isEmailSent && (
          <span>Thank you for reaching out, soon you will be answered</span>
        )}
        {isEmailError && (
          <span>Something wrong happend, please refresh page and try again</span>
        )}
      </div>
    );
}
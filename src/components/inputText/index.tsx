import { useState } from 'react'

type InputTextProps = {
    type: string
    id: string
    label: string
    required?: boolean
    classNames?: string
}

export default function InputText(props: InputTextProps){
    const [value, setValue] = useState('')

    return (
      <fieldset className="group w-full max-w-lg relative "> 
        {props.type === "textarea" ? (
          <textarea
            name={props.id}
            id={props.id} 
            onChange={e => setValue(e.target.value)}
            required={props.required}
            className={`bg-black peer opacity-70 backdrop:blur-lg p-2 resize-none h-44 rounded-sm w-full ${props.classNames}`}
          />
        ) : (
          <input
            type={props.type}
            name={props.id}
            id={props.id}  
            onChange={e => setValue(e.target.value)}
            required={props.required}
            className={`bg-black peer opacity-70 backdrop:blur-lg p-2 rounded-sm w-full ${props.classNames}`}
          />
        )}
        <label htmlFor={props.id} className={`absolute left-3 top-2 transition-all px-2 rounded-sm z-10 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-gray-900 peer-focus:bg-white ${value && 'text-xs -translate-y-4 text-gray-900 bg-white'}`}>{props.label}</label>

      </fieldset>
    );
}
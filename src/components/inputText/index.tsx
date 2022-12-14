
type InputTextProps = {
    type: string
    id: string
    label: string
    required?: boolean
    classNames?: string
}

export default function InputText(props: InputTextProps){

    return (
      <fieldset className="w-full max-w-lg relative">
        <label htmlFor={props.id} className='absolute left-3 top-2 z-10'>{props.label}</label>
        {props.type === "textarea" ? (
          <textarea
            name={props.id}
            id={props.id}
            required
            className={`bg-black opacity-70 backdrop:blur-lg p-2 resize-none h-44 rounded-sm w-full ${props.classNames}`}
          />
        ) : (
          <input
            type={props.type}
            name={props.id}
            id={props.id}
            required={props.required}
            className={`bg-black opacity-70 backdrop:blur-lg p-2 rounded-sm w-full ${props.classNames}`}
          />
        )}
      </fieldset>
    );
}
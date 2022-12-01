type TextProps = {
    content?: string
    variant?: "title" | "subtitle" | "small" | "outlined" | "bold" | "medium"
    className?: string
}

export function Text(props: TextProps) {

    switch (props.variant) {
        case "title":
            return <h1 className={`w-full font-bold text-center text-lg ${props.className}`}>{props.content ||"title"}</h1>
        case "subtitle":
            return <h2 className={`font-bold text-center text-md ${props.className}`}>{props.content ||"subtitle"}</h2>
        case "outlined":
            return <p className={`text-center text-md md:text-lg stroke-current ${props.className}`}>{props.content || "outlined"}</p>;
        case "medium":
            return <p className={`font-thin text-center text-md  ${props.className}`}>{props.content ||"medium"}</p>
        case "small":
            return <p className={`font-thin text-center text-sm  ${props.className}`}>{props.content ||"small"}</p>
        case "bold":
            return <p className={`font-bold text-center text-sm  ${props.className}`}>{props.content ||"bold"}</p>
        default:
            return <p className={`font-light text-center text-md ${props.className}`}>{props.content ||"default"}</p>
    }

}
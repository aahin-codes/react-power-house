import './_Button.scss'
type ButtonProps={
    type?: "button" | "submit" | "reset",
    className?: "default" | "primary" | string,
    onClick?: ()=> void,
    label: string

}

const Button = ({type="button", className="default",onClick, label} : ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button;
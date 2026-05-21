import './_RoundedPill.scss'
type RoundedPillProps={
  label?:string,
  className?:string
}
const RoundedPill = ({label, className}:RoundedPillProps) => {
  return (
    <span className={`rounded-pill ${className}`}>{label}</span>
  )
}

export default RoundedPill;
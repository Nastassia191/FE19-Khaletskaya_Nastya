import "./Button.scss"

type PropsType = {
  color: string,
  text?: string,
  handclick: any
}

const Button = ({
  color,
  text = "click",
  handclick,
}: PropsType) => {



  return (
    <button className={`button-them _${color}`} onClick={handclick}>
      {text}
    </button>
  )
}

export default Button;
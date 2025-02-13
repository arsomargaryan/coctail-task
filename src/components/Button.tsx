
interface Props {
    style:string
    text:string

}

export default function Button({style,text}:Props) {
  return (
    <button 
      className={style + " cursor-pointer"}>
        {text}
    </button>
  )
}

type Props = {
    title: string
}

const Button = ({title}: Props) => {
  return (
    <button className="p-3 cursor-pointer font-bold bg-violet">
        {title}
    </button>
  )
}

export default Button
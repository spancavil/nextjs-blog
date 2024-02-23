type Props = {
  title: string
  onClick?: () => void
}

const Button = ({ title, onClick = () => {} }: Props) => {
  return (
    <button
      className="p-3 cursor-pointer font-bold bg-violet"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button

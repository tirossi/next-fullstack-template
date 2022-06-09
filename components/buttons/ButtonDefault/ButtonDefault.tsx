export interface IButtonDefault {
  btnText: string
}

const ButtonDefault: React.FC<IButtonDefault> = ({ btnText }) => {
  return <button>{btnText}</button>
}

export default ButtonDefault

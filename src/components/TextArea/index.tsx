import './index.scss'

const TextArea = ({ value, setValue, onKeyUp }: any) => {
  return (
    <textarea
      autoFocus
      value={value}
      onChange={(text) => setValue(text)}
      onKeyUp={onKeyUp}
      className="text-area"
      placeholder="Paste your text here..."
    />
  )
}

export default TextArea

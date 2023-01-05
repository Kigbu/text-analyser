import './index.scss'

const BottomResultBox = ({ longWord, readTime }: any) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: `~${readTime} Minutes`,
    },
    {
      title: 'Longest word:',
      value: longWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox

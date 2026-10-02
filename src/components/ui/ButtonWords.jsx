export default function ButtonWords({ text }) {
  return <span className="hero-button__words" aria-hidden="true">{text.split(" ").map((word, index) => (
    <span className="hero-button__word" key={`${word}-${index}`} style={{ "--word-delay": `${index * 22}ms` }}>
      <span>{word}</span><span>{word}</span>
    </span>
  ))}</span>;
}


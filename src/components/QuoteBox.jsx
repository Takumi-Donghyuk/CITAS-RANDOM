import "./styles/QuoteBox.css"
const QuoteBox = ({quote, handleChangeQuote, planet}) => {
    const {phrase, author} = quote;
  return (
    <article className="quotebox">
          <h1 className="quotebox_title">INFOGALAX</h1>
          <div className="quotebox_box">
            <p>{phrase}</p>
          </div>
          <button className="quotebox_btn" onClick={handleChangeQuote}><img src="/Images/Recarga.png" alt="botón de recarga" /></button>
          <div className={`${planet}`}>
            <p className="quotebox_author">Autor: {author}</p>
          </div>
    </article>
  )
}
export default QuoteBox
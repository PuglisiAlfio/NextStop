export default function Luoghi({ titolo, luoghi, testoAlternativo, }) {
  return (
    <section className="categoria-luoghi">
      <h2>{titolo}</h2>
      {luoghi.length === 0 && (
        <p className="testo-alternativo">{testoAlternativo}</p>
      )}
      {luoghi.length > 0 && (
        <ul className="luoghi">
          {luoghi.map((luogo) => (
            <li key={luogo.id} className="luogo">
               <button >
                <img src={luogo.image.src} alt={luogo.image.alt} />
                <h3>{luogo.titolo}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

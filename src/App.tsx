import Fejlec from "./Fejlec"
import Lablec from "./Lablec"
import ShoeCard from "./ShoeCard"

function App() {
  const shoes = [
    { model: "Air Jordan 1", brand: "Nike", isLimitedEdition: true, releaseYear: 1985, sports: ["kosárlabda"] },
    { model: "Stan Smith", brand: "Adidas", isLimitedEdition: false, releaseYear: 1971, sports: ["tenisz"] },
    { model: "Chuck Taylor All Star", brand: "Converse", isLimitedEdition: false, releaseYear: 1917, sports: ["kosárlabda", "divat"] },
    { model: "Yeezy Boost 350", brand: "Adidas", isLimitedEdition: true, releaseYear: 2015, sports: ["lifestyle"] },
    { model: "Air Max 1", brand: "Nike", isLimitedEdition: false, releaseYear: 1987, sports: ["futás", "streetwear"] },
    { model: "Puma Suede", brand: "Puma", isLimitedEdition: false, releaseYear: 1968, sports: ["breaktánc", "divat"] },
    { model: "Reebok Pump", brand: "Reebok", isLimitedEdition: true, releaseYear: 1989, sports: ["kosárlabda"] },
  ]

  return (
    <main className="page-shell">
      <Fejlec />
      <section id="cipokartya" aria-label="Ikonikus cipők">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.model} {...shoe} />
        ))}
      </section>
      <Lablec />
    </main>
  )
}

export default App

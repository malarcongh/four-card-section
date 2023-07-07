import CardsMasonry from "./components/CardsMasonry"

function App() {

  return (
    <main className="cards-section">
      <h1 className="section-title">
        <span className="title-light">Reliable, efficient delivery</span>
        <span className="title-bold">Powered by Technology</span>
      </h1>
      <p className="section-text">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is succesful</p>
      <CardsMasonry/>
    </main>
  )
}

export default App

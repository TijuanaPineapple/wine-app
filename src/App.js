import Header from "./components/Header"
import Wines from "./components/Wines"
import { useState } from "react"

function App() {
  const [wines, setWines] = useState([
    {
      id: 1,
      varietal: "Sauvignon Blanc",
      text: "Light bodied, tropical fruit, citrus, fresh cut grass",
      reminder: true,
    },
    {
      id: 2,
      varietal: "Chardonnay",
      text: "Medium to full bodied, popcorn kernel, lemon peel, saline",
      reminder: true,
    },
    {
      id: 3,
      varietal: "Pinot Noir",
      text: "Light-medium bodied, raspberry, dried herbs, spices",
      reminder: false,
    },
    {
      id: 4,
      varietal: "Tempranillo",
      text: "Medium bodied, smoke, pepper, blackberries, tea-leaves",
      reminder: false,
    },
  ])

  // Delete Wine
  const deleteWine = (id) => {
    setWines(wines.filter((wine) => wine.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {wines.length > 0 ? (
        <Wines wines={wines} onDelete={deleteWine} />
      ) : (
        "Time to taste some wine!"
      )}
    </div>
  )
}

export default App

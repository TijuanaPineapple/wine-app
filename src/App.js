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
  return (
    <div className='container'>
      <Header />
      <Wines wines={wines} />
    </div>
  )
}

export default App

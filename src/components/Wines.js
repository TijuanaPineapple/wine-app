import Wine from "./Wine"

const Wines = ({ wines }) => {
  return (
    <>
      {wines.map((wine) => (
        <Wine key={wine.id} wine={wine} />
      ))}
    </>
  )
}

export default Wines

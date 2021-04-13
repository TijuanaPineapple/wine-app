import Wine from "./Wine"

const Wines = ({ wines, onDelete }) => {
  return (
    <>
      {wines.map((wine) => (
        <Wine key={wine.id} wine={wine} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Wines

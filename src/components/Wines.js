const Wines = ({ wines }) => {
  return (
    <>
      {wines.map((wine) => (
        <h3 key={wine.id}>{wine.varietal}</h3>
      ))}
    </>
  )
}

export default Wines

const Wine = ({ wine }) => {
  return (
    <div className='wine'>
      <h3>{wine.varietal}</h3>
      <p>{wine.text}</p>
    </div>
  )
}

export default Wine

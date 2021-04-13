import { FaTimes } from "react-icons/fa"

const Wine = ({ wine, onDelete }) => {
  return (
    <div className='wine'>
      <h3>
        {wine.varietal}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(wine.id)}
        />
      </h3>
      <p>{wine.text}</p>
    </div>
  )
}

export default Wine

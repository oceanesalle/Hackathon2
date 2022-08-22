import '../components/productCard.css';
import { BsCart3 } from "react-icons/bs";
//npm install react-icons

const ProductCard = (props) => {
  return (
    <div className='card-container'>
      <img src={props.image} alt={props.name} className='card-image' />
      <div className='card-body'>
      <p className='card-title'>{props.name}</p>
      <p className='card-description'>{props.description}</p>
      </div>
      <h3 className='card-price'>{props.price} €</h3>
      <button className='card-button'><BsCart3 /></button>
    </div>
  )
}

export default ProductCard;
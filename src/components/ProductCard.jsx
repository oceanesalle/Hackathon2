import '../components/productCard.css';

const ProductCard = (props) => {
  return (
    <div className='card-container'>
      <img src={props.image} alt={props.name} className='card-image' />
      <div className='card-body'>
      <p className='card-title'>{props.name}</p>
      <p className='card-description'>{props.description}</p>
      <h3 className='card-price'>{props.price}</h3>
      </div>
    </div>
  )
}

export default ProductCard;
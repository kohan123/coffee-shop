import './card-item.css';

const CardItem = ({img, text, country, price, active}) => {
    return (
        <div className={`card-item-container ${active}`}>
            <img src={img} alt= 'product'/>
            <p className='text'>{text}</p>
            <p className='country'>{country}</p>
            <p className='price'>{price}</p>
        </div>
    )
}

export default CardItem;
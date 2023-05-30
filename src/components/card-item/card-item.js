import './card-item.css';

const CardItem = ({img, text, price}) => {
    return (
        <div>
            <img src={img} />
            <p>{text}</p>
            <p>{price}</p>
        </div>
    )
}

export default CardItem;
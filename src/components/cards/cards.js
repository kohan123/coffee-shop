import './cards.css';
import CardItem from '../card-item/card-item';

const Cards = ({data}) => {

const cards = data.map(item => {
    return (
    <CardItem key={item.key} {...item}/>
    )
})


    return (
        <div className='flex'>
        {cards}
        </div>
    )
}

export default Cards;
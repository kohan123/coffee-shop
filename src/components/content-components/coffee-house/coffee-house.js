import './coffe-house.css';

import BlackBeanSeparator from '../../black-bean-separator/black-bean-separator';
import Cards from '../../cards/cards';
import product3 from '../../../images/products/product3.jpg';
import product2 from '../../../images/products/product2.png';
import product1 from '../../../images/products/product1.png';

const data = [
    {
        active: 'active',
        img: product3,
        text:'Solimo Coffee Beans 2 kg',
        price:'10.73$',
        key: 1
    },
    {
        img: product2,
        text:'Presto Coffee Beans 1 kg',
        price:'15.99$',
        key: 2
    },
    {
        img: product1,
        text:'AROMISTICO Coffee 1 kg',
        price:'6.99$',
        key: 3
    },

]


const CoffeeHouse = () => {
    return (
        <div className='coffee-house-container'>
            <h1 className='content-title'>About us</h1>
            <BlackBeanSeparator/>
            <div className='text-container'>
                <p>Extremity sweetness difficult behaviour he of. 
                    On disposal of as landlord horrible. 
                    Afraid at highly months do things on at. 
                    Situation recommend objection do intention so questions. 
                    As greatly removed calling pleased improve an. 
                    Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. 
                    At it went is song that held help face.</p>
                <p>Now residence dashwoods she excellent you. 
                    Shade being under his bed her, Much read on as draw.
                    Blessing for ignorant exercise any yourself unpacked. 
                    Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. 
                    Secure active living depend son repair day ladies now.</p>
            </div>
            <div className='cards-container'>
                <h1>Our best</h1>
                <div className='cards-block'>
                <Cards data={data}/>
                </div>
                
            </div>
        </div>
    )
}

export default CoffeeHouse;
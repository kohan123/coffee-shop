import './coffe-house.css';

import BlackBeanSeparator from '../../black-bean-separator/black-bean-separator';
import CardItem from '../../card-item/card-item';
import product3 from '../../../images/products/product3.jpg';

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
                <CardItem img={product3} text='Solimo Coffee Beans 2 kg' price='10.73$'/>
            </div>
        </div>
    )
}

export default CoffeeHouse;
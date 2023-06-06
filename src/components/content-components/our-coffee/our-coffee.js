import './our-coffee.css';

import Header from '../../header/header';
import  headerBg2 from '../../../images/header/header2.png';

const OurCoffee = () => {
    return (
        <div>
            <Header img={headerBg2} height={'250px'} title='Our coffee'/>
        </div>
    )
}

export default OurCoffee;
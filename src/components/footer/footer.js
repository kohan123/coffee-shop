import './footer.css';


import Navigation from '../navigation/navigation';
import BlackBeanSeparator from '../black-bean-separator/black-bean-separator';


import bawBean from '../../images/beans/baw-bean.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='navigation'><Navigation img={bawBean} color={'black'}/></div>
            <div className='black-bean-separator'><BlackBeanSeparator /></div>
        </div>
    )
}

export default Footer;
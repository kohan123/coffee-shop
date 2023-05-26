import './navigation.css';

import WhiteBean  from '../../images/beans/white-bean.png';


const Navigation = () => {
    return (
        <div className='nav-container'>
            <img src={WhiteBean} alt='white-bean' className='white-bean'/>
            <ul>
                <li>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
        </div>
    )
}

export default Navigation;
import './header.css';

import Navigation from '../navigation/navigation';
import mainHeader from '../../images/header/main-header.jpg';
import whiteBeanFull from '../../images/beans/white-bean-full.png';

const Header = () => {
    return (
        <div style=
        {{backgroundImage: `url(${mainHeader})`,
          height: 600,
          paddingTop: 20,
          backgroundPosition: 'center', 
          backgroundSize: 'cover'  
        }}>
            <Navigation/>
            <h1 className='header-title'>Everything You Love About Coffee</h1>
            <div className='beans-container'>
                <div className='border-line'></div>
                <img className='bean' src={whiteBeanFull} alt="bean" />
                <div className='border-line'></div>
            </div>
            <h2>We makes every day full of energy and taste</h2>
            <h2>Want to try our beans?</h2>
            <div class="button-wrapper">
                <button>More</button>
            </div>
        </div>
    )
}

export default Header;
import './header.css';

import Navigation from '../navigation/navigation';
import whiteBean  from '../../images/beans/white-bean.png';

const Header = ({img, height, title}) => {
    return (
        <div style=
        {{backgroundImage: `url(${img})`,
          height: `${height}`,
          paddingTop: 20,
          backgroundPosition: 'center', 
          backgroundSize: 'cover'  
        }}>
            <Navigation img={whiteBean} color={'aliceblue'}/>
            <h1 className='header-title'>{title}</h1>
        </div>
    )
}

export default Header;
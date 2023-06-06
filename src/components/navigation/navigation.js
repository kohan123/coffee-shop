import './navigation.css';
import { Link } from 'react-router-dom';




const Navigation = ({img, color}) => {
    return (
        <div className='nav-container'>
            <img src={img} alt='bean' className='bean'/>
            <ul style={{color: `${color}`}}>
                <li><Link className='link-style' to='/coffee-house'>Coffee house </Link></li>
                <li><Link className='link-style' to='/our-coffee'>Our coffee</Link></li>
                <li><Link className='link-style' to='/your-pleasure'>For your pleasure</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;
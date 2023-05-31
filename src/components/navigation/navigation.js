import './navigation.css';




const Navigation = ({img, color}) => {
    return (
        <div className='nav-container'>
            <img src={img} alt='bean' className='bean'/>
            <ul style={{color: `${color}`}}>
                <li>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
        </div>
    )
}

export default Navigation;
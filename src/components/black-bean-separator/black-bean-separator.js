import './black-bean-separator.css';
import BlackBean from '../../images/beans/black-bean.png';

const BlackBeanSeparator = () => {
    return (
        <div className='beans-container'>
            <div className='border-black-line'></div>
            <img className='black-bean' src={BlackBean} alt="bean" />
            <div className='border-black-line'></div>
        </div>
    )
}

export default BlackBeanSeparator;
import './Header.scss'
import logo from '../../../public/tree.png'

export default function Header () {
    return(
        <div className='header'>
            <img src={logo}></img>
            <h1>Создай свою елку!</h1>
        </div>
    )
}
import { useState } from 'react'
import './Main.scss'
import action from '../../../action'

export default function Main () {
    const [simbol, setSimbol] = useState ('')
    const [heigth, setHeigth] = useState ('')
    return (
        <div className='main'>
            <modal>
                <form>
                    <label form='simbol'>Вид ели</label>
                    <input type='text' id='simbol' value={simbol} onChange={(e) => setSimbol(e.target.value)}></input>
                    <label form='heigth'>Высота ели</label>
                    <input type='number' id='heigth' value={heigth} onChange={(e) => setHeigth(e.target.value)}></input>
                    <button onClick={() => {action(simbol, heigth)}}>Поставить ель</button>
                </form>
            </modal>
        </div>
    )
}
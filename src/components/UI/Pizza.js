import { useContext } from 'react';
import classes from '../Header.module.css'
import DarkMode from '../../store/darkmode-context';


const Pizza = () => {
    const ctx = useContext(DarkMode)

    return <div className={ctx.container}>
        <h1 className={`${classes.title}`}>The Best Pizza of Your Life</h1>
        <div>
            <div className={`${classes.pizza} ${classes.illustration}`}></div></div>
    </div>

}
export default Pizza;
import { useContext } from 'react';
import DarkMode from '../store/darkmode-context';
import classes from './NotFound.module.css'

const NotFound = () => {
    const ctx = useContext(DarkMode)
    return <div className={ctx.notfound}>
        <h2 className={classes.notfound}>404</h2>

        <h2 className={`${classes.notfoundtext} `}>Not Found</h2>
    </div>

}

export default NotFound
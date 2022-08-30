import { useContext } from 'react';
import DarkMode from '../store/darkmode-context';
import classes from './AboutUs.module.css'
const AboutUs = () => {
    const ctx = useContext(DarkMode)

    return <div className={ctx.aboutUs}><div className='container-fluid'>
        <div className="row row-cols-1">
            <div className="col">

                <p className={classes.about}>About Us </p>
                <h2 className={classes.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
                <div className={classes.photocontainer}><img className={classes.photo} src="https://unsplash.com/photos/aqrDQEhxAos/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwODI3NDY1&force=true&w=1920" alt='Pizza' /></div>
                <p className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem dolorum modi, perspiciatis cupiditate eum nulla. Optio rem autem eligendi quaerat voluptate, doloremque praesentium sint obcaecati doloribus et, esse mollitia!</ p><p className={classes.text}>
                    Tempore temporibus deserunt suscipit! Earum quis corporis nemo iure odit provident dolorum temporibus necessitatibus quaerat dolorem iste, officiis consectetur quibusdam assumenda quo adipisci laboriosam harum non sint voluptate quasi alias.
                    Praesentium magni repellat tempore, libero eos aperiam ipsa, iure animi neque voluptates dicta!</p><p className={classes.text}>Cum quos doloremque sint tenetur, eum, maiores nulla aspernatur reprehenderit necessitatibus officiis illo earum sunt at ut.
                        Amet doloremque soluta debitis quidem minima est sapiente suscipit alias facilis dolores, consectetur esse rerum sit ex magnam iure! Delectus atque corrupti libero unde placeat eaque itaque deleniti rerum architecto!
                        Quos illum repellendus repellat maxime, minus, delectus, consequatur quis voluptate laboriosam dolor expedita odit tempore cum? Quos quia autem, officia numquam consectetur veniam illo excepturi, eaque sed possimus tempore dolores!</p>
                <div className={classes.photocontainer}><img className={classes.photo} src="https://unsplash.com/photos/YKvGUO4Zb7Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwODIxNDMy&force=true&w=1920
" alt='Pizza' />
                    <h2 className={`${classes.title} ${classes.titlemargin}`}>Quas accusamus obcaecati perspiciatis, praesentium veritatis sunt doloremque consectetur id animi error reiciendis?</h2>
                    <p className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatem dolorum modi, perspiciatis cupiditate eum nulla. Optio rem autem eligendi quaerat voluptate, doloremque praesentium sint obcaecati doloribus et, esse mollitia!</ p><p className={classes.text}>
                        Tempore temporibus deserunt suscipit! Earum quis corporis nemo iure odit provident dolorum temporibus necessitatibus quaerat dolorem iste, officiis consectetur quibusdam assumenda quo adipisci laboriosam harum non sint voluptate quasi alias.
                        Praesentium magni repellat tempore, libero eos aperiam ipsa, iure animi neque voluptates dicta!</p><p className={classes.text}>Cum quos doloremque sint tenetur, eum, maiores nulla aspernatur reprehenderit necessitatibus officiis illo earum sunt at ut.
                            Amet doloremque soluta debitis quidem minima est sapiente suscipit alias facilis dolores, consectetur esse rerum sit ex magnam iure! Delectus atque corrupti libero unde placeat eaque itaque deleniti rerum architecto!
                            Quos illum repellendus repellat maxime, minus, delectus, consequatur quis voluptate laboriosam dolor expedita odit tempore cum? Quos quia autem, officia numquam consectetur veniam illo excepturi, eaque sed possimus tempore dolores!</p>
                </div>
            </div ></div></div>
    </div>
}

export default AboutUs
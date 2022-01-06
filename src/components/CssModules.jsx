import classes from "./CssModules.module.scss"

export default function CssModules() {
    return (
        <div className={classes.container}>
            <p className={classes.title}>- CSS Modules -</p>
            <button className={classes.button}>Fight!</button>
        </div>
    )
}

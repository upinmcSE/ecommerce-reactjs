import Button from "@components/Button/Button";
import styles from "./styles.module.scss"

function MyBanner() {
    const { container, content, title, des} = styles
    return ( 
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <div className={des}>Make yours celebrations even more special this years 
                    with beautiful.
                </div>

                <Button content={'Go to Shop'} />
            </div>
        </div>

     );
}

export default MyBanner;
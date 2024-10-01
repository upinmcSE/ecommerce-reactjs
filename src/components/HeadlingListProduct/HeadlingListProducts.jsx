import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss'
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadlingListProducts() {
    const targetDate = '2025-12-31T00:00:00'
    const {container, containerItem} = styles
    return ( 
        <MainLayout>
            <div className={container}>
            
                <CountdownBanner />
            
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
     );
}

export default HeadlingListProducts;
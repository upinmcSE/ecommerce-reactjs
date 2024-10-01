import MyBanner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";

import styles from "./styles.module.scss"
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHealing/AdvanceHeadling";
import HeadlingListProducts from "@components/HeadlingListProduct/HeadlingListProducts";

function HomePage() {
    const { container } = styles

    return ( 
        <div>
            <div className={container}>
                <MyHeader />
                <MyBanner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProducts />
            </div>
        </div> 
);
}

export default HomePage;
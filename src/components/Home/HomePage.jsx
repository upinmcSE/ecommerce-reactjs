import MyBanner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";

import styles from "./styles.module.scss"
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHealing/AdvanceHeadling";
import HeadlingListProducts from "@components/HeadlingListProduct/HeadlingListProducts";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomepage from "@components/SaleHomepage/SaleHomepage";

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <MyBanner />
            <Info />
            <AdvanceHeadling />
            <HeadlingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomepage />
            <div
                style={{
                    height: '200px'
                }}
            >
            </div>
        </>
    );
}

export default HomePage;
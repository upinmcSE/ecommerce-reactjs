import { dataInfo } from "@components/Info/constants";

import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss'
import InfoCard from "@components/Info/InfoCard/InfoCard";

function Info() {
    const {container} = styles
    return ( 
        
        <MainLayout>
            <div className = {container}>
                {dataInfo.map((item) => {
                    return <InfoCard content={item.title} desc={item.description} src={item.src} />
                })}
            </div>
        </MainLayout>
        
     );
}

export default Info;
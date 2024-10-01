import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo.png';

function MyHeader() {
    const {container, containerHeader, containerBox, containerBoxIcon, containerMenu } =
        styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.slice(0, 3).map(item => {
                            return <BoxIcon type={item.type} href={item.href} />;
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map(item => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map(item => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.slice(3, dataMenu.length).map(item => {
                            return <BoxIcon type={item.type} href={item.href} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;

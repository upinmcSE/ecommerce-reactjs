import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/facebook-icon.svg';
import insIcon from '@icons/svgs/instagram-icon.svg';
import ytbIcon from '@icons/svgs/youtube-icon.svg';
import reload from '@icons/svgs/reload-icon.svg';
import heart from '@icons/svgs/heart-icon.svg';
import cart from '@icons/svgs/cart-icon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = type => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            case 'reload':
                return reload;
            case 'heart':
                return heart;
            case 'cart':
                return cart;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;

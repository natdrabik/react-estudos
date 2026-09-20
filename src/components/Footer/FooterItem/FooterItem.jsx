import './FooterItem.scss';

function FooterItem({ title, image, url }) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} />
            </a>
        </li>
    );
}

export default FooterItem;
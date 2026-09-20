import './ProjetoCard.scss';

function ProjetoCard({ title,image,year,url,description }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <article>
                <figure>
                    <img
                        src={image}
                        alt=""
                    />
                </figure>
                <div className="info">
                <h3>{title}</h3>
                <h4>{year}</h4>
                <p>{description}</p>
                </div>
            </article>
            </a>
    );
}

export default ProjetoCard;
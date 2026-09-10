import './SkillCard.scss';

function SkillCard({ name, icon }) {
    return (
        <li>
            <img
                className="skill-card__icon"
                src={icon}
                alt=""
            />
            <h3>
                {name}
            </h3>
        </li>
    );
}

export default SkillCard;
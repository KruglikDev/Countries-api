import './Card.scss';

export interface ICard {
    flag: string,
    name: string,
    population: number,
    region: string,
    capital: string
}

const Card = (props: ICard) => {
    return (
        <section className='card'>
            <img
                src={props.flag}
                alt={props.name}
            />

            <div className="card__content">
                <h2 className='card__title'>{props.name}</h2>
                <div className='card__population'>
                    <h5>Population: </h5>
                    <p>{props.population}</p>
                </div>
                <div className='card__region'>
                    <h5>Region: </h5>
                    <p>{props.region}</p>
                </div>
                <div className='card__capital'>
                    <h5>Capital: </h5>
                    <p>{props.capital}</p>
                </div>
            </div>
        </section>
    )
}

export default Card;

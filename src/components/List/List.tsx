import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ICountry} from "../../features/countries/countriesSlice";
import Card from "../Card/Card";

import './List.scss';

interface ICountriesList {
    countries: {
        countries: ICountry[]
    }
}

interface IList {
    offset: number
}

const List = ({offset}: IList) => {
    const [loadedCountries, setLoadedCountries] = useState<any>();
    const data = useSelector<ICountriesList>(state => state.countries.countries.slice(offset, 10));

    useEffect(() => {
        setLoadedCountries(data);
    }, [offset])

    if(!loadedCountries) {
        return <div>Loading</div>
    }

    //TODO fix problem with data render
    // console.log(data);

    const renderCards = (arr:ICountry[]) => {
        return arr.map((country, i) => <Card
            flag={country.flag}
            name={country.name}
            population={country.population}
            capital={country.capital}
            region={country.region}
            key={i}
        />)
    }

    return (
        <main className='list'>
            {renderCards(loadedCountries)}
        </main>
    )
}

export default List;

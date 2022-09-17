import Card from "../Card/Card";
import './List.scss';
import useFetchCountries from "../../api/fetchData";
import {useEffect, useState} from "react";

const List = () => {
    const [countries, setCountries] = useState();
    const {getAllCountries} = useFetchCountries();

    useEffect(() => {
        getAllCountries().then(res => setCountries(res));
    }, [])

    console.log(countries);

    return (
        <div className='list'>
            {/*<Card />*/}
        </div>
    )
}

export default List;

import {useHttp} from "../hooks/http.hook";

const useFetchCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    const {request} = useHttp();

    const getAllCountries = async () => {
        const countries = await request(url);

        return countries.map(sortCountries);
    }

    const sortCountries = (country: any) => {
       return {
           image: country.flags.svg,
           name: country.name?.official,
           nativeName: country.name.nativeName,
           population: country.population,
           region: country.region,
           subRegion: country.subregion,
           capital: country.capital,
           topLevelDomain: country.tld,
           currencies: country.currencies,
           languages: country.languages,
           borderCountries: country.borders
       }
    }

    return {
        getAllCountries
    }
}

export default useFetchCountries;


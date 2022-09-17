import {useHttp} from "../hooks/http.hook";

const useFetchCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    const {request} = useHttp();

    const getAllCountries = async () => {
        const countries = await request(url);

        return countries;
    }

    return {
        getAllCountries
    }
}

export default useFetchCountries;


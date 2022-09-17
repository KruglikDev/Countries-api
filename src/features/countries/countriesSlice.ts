import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICard} from "../../components/Card/Card";

export interface ICountry extends ICard {
    nativeName: {
        official: string,
        common: string
    },
    subRegion: string,
    topLevelDomain: string,
    currencies: {
        name: string,
        symbol: string
    },
    languages: string[],
    borderCountries: string[]
}

const url = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders';

const sortCountries = (country: any) => {
  return {
    flag: country.flags.svg,
    name: country.name?.official,
    nativeName: Object.values(country.name.nativeName)[0],
    population: country.population,
    region: country.region,
    subRegion: country.subregion,
    capital: country?.capital[0],
    topLevelDomain: country?.tld[0],
    currencies: Object.values(country.currencies)[0],
    languages: Object.values(country.languages),
    borderCountries: country.borders
  }
}

interface countriesState {
  countries: [],
  status: 'idle' | 'loading' | 'error',
  error: unknown
}

const initialState: countriesState = {
  countries: [],
  status: 'idle',
  error: ''
}

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(url);

            if(!res.ok) {
                throw new Error('Cant fetch data');
            }

            const data = await res.json();

            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchCountries.pending, (state, action) => {
          state.status = 'loading';
          state.error = '';
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
          state.status = 'idle';
          state.countries = action.payload.map(sortCountries);
        })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        })
        .addDefaultCase((state, action) => {})
  },
})

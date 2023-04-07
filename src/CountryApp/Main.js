import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import './Main.css';
import Search from './Search';
const Main = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filteredCountries, setfilteredCountries] = useState(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                if (!res.ok) {
                    throw Error('');
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setCountries(data);
                setfilteredCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    const DeleteCountryfun = (name) => {
        const filtered = filteredCountries.filter((Country) => Country.name.common !== name);
        setfilteredCountries(filtered);
    };
    const SearchCountryfun = (searchtext) => {
        const words = searchtext.toLowerCase();
        const newCountries = countries.filter((Country) => {
            const countryName = Country.name.common.toLowerCase();
            return countryName.startsWith(words);
        });
        setfilteredCountries(newCountries);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Country App</h1>
            {loading && <p>Countries are Loading</p>}
            {error && <p>it is not working</p>}
            <Search onSearchCountryfun={SearchCountryfun} />
            {countries && <Countries countries={filteredCountries} onDeleteCountryfun={DeleteCountryfun} />}
        </div>);};
export default Main;

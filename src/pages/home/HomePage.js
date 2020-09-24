import React, { useState, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';

import { Header , Autocomplete } from '../../components';
import AvailableCountryList from './mock-data';

const HomeContainer = () => {
    const [ userInput, setUserInput ] = useState('');
    const [ suggestList, setSuggestList ] = useState([]);

    const onKeyDown = useCallback((event) => {}, []);

    const debounceUserInput = useRef(debounce((value) => {
        const filterListByValue = AvailableCountryList.filter(
            (countryName) =>
              countryName.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        setSuggestList(filterListByValue.slice(0, 5));
    }, 300)).current;

    const onUserInputChanged = useCallback((event) => {
        const updatedValue = event.target.value;
        setUserInput(updatedValue);
        debounceUserInput(updatedValue)
    }, [debounceUserInput]);

    const onDarkThemeChanged = () => { };
    
    return <>
        <Header onDarkThemeChanged={onDarkThemeChanged} />
        <Autocomplete onKeyDown={onKeyDown} onChange={onUserInputChanged} value={userInput} suggestList={suggestList}/>
    </>
} 

export default HomeContainer;
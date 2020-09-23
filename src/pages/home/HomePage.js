import React, { useState, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';

import { HeaderMenu , AutocompleteInput } from '../../components';
import AvailableCountryList from './mock-data';

const HomeContainer = () => {
    const [ value, setValue ] = useState(false);
    const [ userInput, setUserInput ] = useState('');
    const [ suggestList, setSuggestList ] = useState([]);

    const onKeyDown = useCallback((event) => {}, []);

    const debounceUserInput = useRef(debounce((value) => {
        const filterListByValue = AvailableCountryList.filter(
            (countryName) =>
              countryName.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        setSuggestList(filterListByValue.slice(0, 10));
    }, 300)).current;

    const onUserInputChanged = useCallback((event) => {
        const updatedValue = event.target.value;
        setUserInput(updatedValue);
        debounceUserInput(updatedValue)
    }, [debounceUserInput]);

    const onToggleDarkTheme = () => { setValue(!value)};
    return <>
        <HeaderMenu onToggleDarkTheme={onToggleDarkTheme} isDarkTheme={value} />
        <AutocompleteInput onKeyDown={onKeyDown} onChange={onUserInputChanged} value={userInput} suggestList={suggestList}/>
    </>
} 

export default HomeContainer;
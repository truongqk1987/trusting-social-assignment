import React, { useState, useRef } from "react";
import debounce from "lodash.debounce";

import { Autocomplete } from "../../components";
import AvailableCountryList from "../../mock-data";

const HomePage = () => {
  const [suggestList, setSuggestList] = useState([]);

  const debounceSearchChanged = useRef(
    debounce((value) => {
      const filterListByValue = AvailableCountryList.filter(
        (countryName) =>
          countryName.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setSuggestList(filterListByValue.slice(0, 5));
    }, 300)
  ).current;

  const resetSuggestList = () => setSuggestList([]);

  const renderer = (
    <Autocomplete
      onSearchChanged={debounceSearchChanged}
      suggestList={suggestList}
      resetSuggestList={resetSuggestList}
    />
  );

  return renderer;
};

export default HomePage;

import React, { useState } from 'react';

import { HeaderMenu , AutocompleteInput } from '../../components';

const HomeContainer = () => {
    const [ value, setValue ] = useState(false);
    const onToggleDarkTheme = () => { debugger; setValue(!value)};
    return <>
    <HeaderMenu onToggleDarkTheme={onToggleDarkTheme} isDarkTheme={value} />
    <AutocompleteInput />
</>
} 

export default HomeContainer;
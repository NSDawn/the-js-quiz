import React, {useContext, useState} from 'react';

const AppContext = React.createContext("provider didn't work lel")

export function AppContextProvider(props) {
    
    const G = useState({
        "currQuestion" : 0, 
        "lives": 0
        
    });
    
    return (
        <AppContext.Provider value={G}>
            {props.children}
        </AppContext.Provider>
    )

}

export function G() {
    return useContext(AppContext);
}
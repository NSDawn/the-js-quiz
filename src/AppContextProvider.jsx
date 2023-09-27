import React, {useContext, useState} from 'react';

const AppContext = React.createContext()

export function AppContextProvider(props) {
    
    const G = useState({
        "currQuestion" : 16, 
        "lives": 3,
        "MAX_LIVES": 3, /* const */ 
    });

    
    return (
        <AppContext.Provider value={G}>
            {props.children}
        </AppContext.Provider>
    )

}

export function useGlobal() {
    return useContext(AppContext);
}

export function getGlobal(k) {
    const [_global, _setGlobal] = useGlobal();
    return _global[k];
} 
export function setGlobal(k, v) {
    const [_global, _setGlobal] = useGlobal();
    let new_global = {..._global};
    new_global[k] = v;
    setGlobal(new_global);
    return v;
}
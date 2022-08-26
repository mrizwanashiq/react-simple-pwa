import React from 'react';

import './App.css';

let count = 0;
const App = () => {
    React.useEffect(() => {
        if (count < 1) {
            window.open("https://twitter.com/home", "_blank")
            count += 1;
        }
    }, [])


    return (
        <div className="main-container">

        </div>
    );
}

export default App;
import React from 'react';
import Navigation from './src/navigation';
import { ThemeProvider } from './src/providers';

const App = (): React.JSX.Element => {
    return(
        <ThemeProvider>
            <Navigation/>
        </ThemeProvider>
    )
}

export default App;

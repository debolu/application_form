import React from 'react';
import Tabs from './components/tab';
import Sidebar from './sidebar';

const App = () => {
    return (
    <main>
    <Sidebar style={{postion: "fixed", width: "10%", height: "100vh", backgroundColor: "red" }} />
    <Tabs />
    
    </main>
    )
}

export default App;
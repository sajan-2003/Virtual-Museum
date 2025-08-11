import React from 'react';
import moonlanding from './moonlanding.json';

function App() {
    return (
        <div>
            <h1>Moon Landing Data</h1>
            <ul>
                {moonlanding.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
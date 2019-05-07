import React from 'react'

export default function Header(){
    return (
        <header style={headerStyle}>
            <h1>The Biggest Loser</h1>
        </header>
    )
}

const headerStyle = {
    position: 'fixed',
    left: '0',
    top: '0',
    background: 'black', 
    color: '#fff', 
    textAlign: 'center', 
    padding: '1px',
    width: '100%',
}
import React from 'react'

export default function Header(){
    return (
        <header style={headerStyle}>
            <h1>The Biggest Loser</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333', 
    color: '#fff', 
    textAlign: 'center', 
    padding: '1px'
}
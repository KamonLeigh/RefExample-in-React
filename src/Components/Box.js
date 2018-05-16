import React from 'react';


const Box  = ({ colour }) => {
    const styles = {
        height: '200px',
        width: '200px',
        border: '2px solid black',
        backgroundColor: colour,
        marginBottom: 10
    }

    return (<div style={styles}>
    
            </div>)
}

export default Box;
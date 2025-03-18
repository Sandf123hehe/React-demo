import React from 'react';
import './NewMimicLoads.css';

const NewMimicLoads = () => {
    return (
        <div className="newmimicloads-container">
            <div className="newmimicloads-loader">
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
                <span style={{ '--i': 4 }}></span>
                <span style={{ '--i': 5 }}></span>
            </div>
        </div>
    );
};

export default NewMimicLoads;
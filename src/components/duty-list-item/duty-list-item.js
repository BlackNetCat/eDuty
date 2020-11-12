import React, {Fragment } from 'react';
import './duty-list-item.css';

const DutyListItem = ({ duty }) => {
    const { name, type } = duty;
    return (
        <div className="duty-list-item">
            <div className="duty-cover">
                <div className>
                    <span>{name}</span>
                    <span>{type}</span>
                </div>
            </div>
        </div>
            
        
    );
};

export default DutyListItem;
import React from 'react';

function CreditCard(props) {
    let styles = {
        backgroundColor: `${props.bgColor}`
    }
    return (
        <div style={styles}>
            <ul>
                <li>{props.type}</li>
                <li>{props.number}</li>
                <li>{props.expirationMonth}</li>
                <li>{props.expirationYear}</li>
                <li>{props.bank}</li>
                <li>{props.owner}</li>
                <li>{props.bgColor}</li>
                <li>{props.color}</li>
            </ul>
        </div>
    );
}

export default CreditCard;
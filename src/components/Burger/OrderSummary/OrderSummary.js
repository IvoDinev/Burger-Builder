import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients).map(ingr => (<li key={ingr}>{props.ingredients[ingr]} x {ingr}</li>));
    return (
        <Aux>
            <p>Fresh Burger with:</p>
            <ul>
                {orderSummary}
            </ul>
        </Aux>
    )
}

export default OrderSummary;
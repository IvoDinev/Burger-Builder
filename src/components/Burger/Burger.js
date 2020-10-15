import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    let transfIngr = Object.keys(props.ingredients).map((ingredient) => {
        let ingr = [];
        for (let i = 0; i < props.ingredients[ingredient]; i++) {
            ingr.push(<BurgerIngredient type={ingredient} key={ingredient + i} />)
        }
        return ingr;
    })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);


    if (transfIngr.length === 0) {
        transfIngr = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transfIngr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
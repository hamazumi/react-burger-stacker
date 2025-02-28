import React, {Component} from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {

    //map over an array of ingredients
    //create ingredient component for each item in the array
    
    render() {
        let ingredientComponents = this.props.ingredients.map(item => (
            <li onClick={(e) => this.props.addToBurger(e)}>
                <Ingredient 
                    ingredient={ item.name } 
                    color={ item.color } 
                />
            </li>
        ))

        return (
            <ul>
                {ingredientComponents}
            </ul>
        )
    }
}

export default IngredientList
import React, {Component} from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render() {
    let burgerIngredients = this.props.clickedIngredients.reverse().map((item) => (
        <li>
             <Ingredient ingredient={item.name} color={item.color} />
        </li>
    ))

        return (
            <ul>    
                {burgerIngredients}
            </ul>
        )
    }
}

export default BurgerStack
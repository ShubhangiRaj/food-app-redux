import React, {Component} from 'react';
import ItemsList from './ItemsList'

class ItemsGrid extends Component{
    render(){
        return(
            <div>
                <ItemsList items = {this.props.items}/>
            </div>
        )
    }
}

export default ItemsGrid
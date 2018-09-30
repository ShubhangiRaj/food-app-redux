import ItemsGrid from '../components/ItemsGrid';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        cartItems: state.cartItems,
        compareItems: state.compareItems
    }
}

let ItemsContainer = connect(mapStateToProps)(ItemsGrid);

export default ItemsContainer;
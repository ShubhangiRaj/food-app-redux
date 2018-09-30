import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchProducts } from './actions/actions';
import ItemsContainer from './containers/ItemsContainer';

class App extends Component {
	componentDidMount(){
		fetch("http://www.mocky.io/v2/5ba3eb232f00006500968a36")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				store.dispatch(fetchProducts(data));
			})
	}

  	render() {
    	return (
			<div>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
				</div>
				<Provider store={store}>
					<ItemsContainer/>
				</Provider>
			</div>
    	);
  	}
}

export default App;

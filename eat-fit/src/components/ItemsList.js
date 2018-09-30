import React from 'react';
import '../App.css';

const ItemsList = (props) => {
    console.log(props.items);
    const listItems = props.items.map((item, i) =>
        <div key={i} className = 'itemCard'>
            <img src = {item.img_url} style = {{width: 200, height: 150}}/>
            <h3>{item.name}</h3>
            <p>{item.calories} cal</p>
            <div style = {{display: "inlineBlock"}}>
                <button className="compareBtn">Compare</button>
                <button className="addBtn">Add To Cart</button>
            </div>
        </div>
    );
    return (
        <div className = "itemsWrapper">{listItems}</div>
    );

}

export default ItemsList;
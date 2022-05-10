import React from 'react';
'use strict';

class DropDownItem {
    constructor(ItemName) {
        this.ItemName = ItemName;
    }

    render() {
        return <li><a className="dropdown-item" href="#">{this.ItemName}</a></li>
    }
}

const DropDownElem = (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

        </ul>
    </div>
);


class DropDownList extends React.Component {
    ItemList = []
    constructor(ButtonName) {
        super(undefined);
        this.ButtonName = ButtonName;
    }

    addItem(Item) {
        this.ItemList.push(Item)
    }

    render() {
        return 
    }
}


export {DropDownElem}
'use strict';

import {DropdownApp} from "./js/widgets/dropdown_list.jsx";

const renderer = React.createElement;

const domContainers = [
    document.querySelector('#drop'),
]

ReactDOM.render(renderer(DropdownApp), domContainers[0]);
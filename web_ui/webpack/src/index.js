'use strict';

import {DropdownApp} from "./js/widgets/dropdown_list.jsx";
import {InputFieldsApp} from "./js/widgets/input_fileds";

const renderer = React.createElement;

const domContainers = [
    document.querySelector('#drop'),
    document.querySelector('#input'),
]

ReactDOM.render(renderer(DropdownApp), domContainers[0]);
ReactDOM.render(renderer(InputFieldsApp), domContainers[1]);
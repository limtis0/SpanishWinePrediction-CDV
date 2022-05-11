import {LikeButton} from "./js/widgets/process_btn"
import {DropDownList} from "./js/widgets/dropdown_list";

const e = React.createElement;

const domContainer = document.querySelector('#like_button_container');
const domContainer2 = document.querySelector('#drop');
ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(e(DropDownList), domContainer2);
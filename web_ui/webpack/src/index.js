import {LikeButton} from "./js/widgets/process_btn"

const e = React.createElement;

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
import store from './redux/store';
import render from './render';

store.subscribe(render);

render();

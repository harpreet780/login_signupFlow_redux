import { createStore } from 'redux';
import mainReducers from '../reducer/mainReducers';

export default createStore(mainReducers);
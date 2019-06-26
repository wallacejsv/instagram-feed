import { combineReducers } from 'redux';

import course from './course';
import posts from './posts';

export default combineReducers({ 
    course,
    posts,
 });
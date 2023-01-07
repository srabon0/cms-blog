import { applyMiddleware, createStore } from "redux";
import blogReducer from "./reducers/blogReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
const store = createStore(blogReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store
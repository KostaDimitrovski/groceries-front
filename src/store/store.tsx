import { compose, createStore, applyMiddleware , Middleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer} from "./root-reducer";



const middleWares : Middleware[] = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares))




export const store = createStore(rootReducer,undefined,composedEnhancers)
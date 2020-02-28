import {ActionReducerMap} from '@ngrx/store';
import { IAppProductState } from '../state/app.state';
import { reducer } from './app.product.reducers';
// facade for  reducers so that the Reducer knows what state from Store 
// will be monitored
export const mainReducers: ActionReducerMap<IAppProductState, any> = {
  products: reducer
};

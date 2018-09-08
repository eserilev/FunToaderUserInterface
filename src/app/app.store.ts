
import { combineReducers } from 'redux';
import { ColorReducer } from 'src/app/modules/color/color.store';
import { MidiReducer } from 'src/app/modules/midi/midi.store';


export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface IAppState {
  
}

export const APP_INITIAL_STATE: IAppState = {

}

class AppActions {
    constructor(private state: IAppState, private action) {
     }

}

export const rootReducer = combineReducers<IAppState>({
    color: ColorReducer,
    midi: MidiReducer
    
});
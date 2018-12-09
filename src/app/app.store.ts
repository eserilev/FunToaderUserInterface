
import { combineReducers } from 'redux';
import { ColorReducer } from './modules/color/color.store';
import { MidiReducer } from './modules/midi/midi.store';
import { CommonReducer } from './modules/main/common.store';
import { AudioReducer } from './modules/audio/audio.store';
import { MediaPlayerReducer } from './modules/media-player/media-player.store';


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
    midi: MidiReducer,
    common: CommonReducer,
    audio: AudioReducer,
    media: MediaPlayerReducer,
    
});
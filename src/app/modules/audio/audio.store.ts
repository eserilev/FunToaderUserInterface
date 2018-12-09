import { MediaFile } from "../main/models/media-file.model";
import { CHANGE_AUDIO_COUNT, CHANGE_AUDIO_TIMER } from "../audio/audio.actions";
import { AudioPage } from "../audio/models/audio-page.model";

export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface IAudioState {
    selectedAudioFile: MediaFile;
    audioFiles: MediaFile[];
    audioPages: AudioPage[];
    currentPage: number;
    count: number;
    timer: number;
}

export const AUDIO_INITIAL_STATE: IAudioState = {
    selectedAudioFile: null,
    audioPages: null,
    audioFiles: [],
    currentPage: 1,
    count: 1,
    timer: 10,
}


class AudioActions {
    constructor(private state: IAudioState, private action) { }

    changeTimer() {
        return tassign(this.state, {
            timer: this.action.timer
        });
    }

    changeCount() {
        return tassign(this.state, {
            count: this.action.count
        });
    }

}

export function AudioReducer(state: IAudioState, action): IAudioState {
    if (state == null)
        return AUDIO_INITIAL_STATE;
    let actions = new AudioActions(state, action);
    switch (action.type) {
        case CHANGE_AUDIO_COUNT:
            return actions.changeCount();
        case CHANGE_AUDIO_TIMER:
            return actions.changeTimer();
    }
    return state;
}
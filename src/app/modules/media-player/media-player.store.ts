import { MediaPanelType } from "../main/enums/media-panel-type.enum";
import { UPDATE_CURRENT_MEDIA_TYPE } from "./media-player.actions";



export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface IMediaPlayerState {
    isPlaying: boolean;
    mediaType: MediaPanelType;
}

export const MEDIA_PLAYER_INITIAL_STATE: IMediaPlayerState = {
    isPlaying: false,
    mediaType: null,

}


class MediaPlayerActions {
    constructor(private state: IMediaPlayerState, private action) { }

    updateCurrentMediaType(): IMediaPlayerState {
        return tassign(this.state, {
            mediaType : this.action.mediaType
        });
    }
}

export function MediaPlayerReducer(state: IMediaPlayerState, action): IMediaPlayerState {
    if (state == null)
        return MEDIA_PLAYER_INITIAL_STATE;
    let actions = new MediaPlayerActions(state, action);
    switch (action.type) {
        case UPDATE_CURRENT_MEDIA_TYPE:
            return actions.updateCurrentMediaType();
    }
    return state;
}
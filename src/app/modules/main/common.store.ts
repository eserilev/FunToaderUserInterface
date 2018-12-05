import { MediaPanelType } from "src/app/modules/main/enums/media-panel-type.enum";
import { CHANGE_MEDIA_PANEL } from "src/app/modules/main/common.actions";



export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface ICommonState {
    selectedPanel: MediaPanelType;
}

export const COMMON_INITIAL_STATE: ICommonState = {
    selectedPanel: MediaPanelType.Audio,
}


class CommonActions {
    constructor(private state: ICommonState, private action) { }

    changeMediaPanel() {
        return tassign(this.state, {
            selectedPanel : this.action.selectedPanel
        });
    }

}

export function CommonReducer(state: ICommonState, action): ICommonState {
    if (state == null)
        return COMMON_INITIAL_STATE;
    var actions = new CommonActions(state, action);
    switch (action.type) {
        case CHANGE_MEDIA_PANEL:
            return actions.changeMediaPanel();
    }
    return state;
}
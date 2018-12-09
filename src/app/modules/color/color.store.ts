import { ColorModel } from "./models/color.model";
import { Rgba } from "ngx-color-picker/dist/lib/formats";
import { GET_COLOR_LIST_SUCCESS, SEND_COLOR_MESSAGE, CHANGE_COLOR } from "./color.actions";

export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface IColorState {
    selectedColor: ColorModel;
    colorList: ColorModel[];
    count: number;
    timer: number;
}

export const COLOR_INITIAL_STATE: IColorState = {
    selectedColor: null,
    colorList: [],
    count: 1,
    timer: 10,
}


class ColorActions {
    constructor(private state: IColorState, private action) { }

    getColorListSuccess() {
        return tassign(this.state, {
            colorList : this.action.colorList
        });
    }

    sendColorMessage() {
        return tassign(this.state, {
            selectedColor: this.action.selectedColor
        })
    }

    changeColor() {
        let c = new Object([...this.state.colorList]);
        c[this.action.color.index -1] = this.action.color;
        return tassign(this.state, {
            colorList: c,
        });
    }

}

export function ColorReducer(state: IColorState, action): IColorState {
    if (state == null)
        return COLOR_INITIAL_STATE;
        let actions = new ColorActions(state, action);
    switch (action.type) {
        case GET_COLOR_LIST_SUCCESS:
            return actions.getColorListSuccess();
        case SEND_COLOR_MESSAGE:
            return actions.sendColorMessage()
        case CHANGE_COLOR:
            return actions.changeColor();
    }
    return state;
}
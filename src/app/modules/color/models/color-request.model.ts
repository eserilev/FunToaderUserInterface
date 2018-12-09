import { ColorModel } from "./color.model";
import { RequestModel } from "../../main/models/request.model";

export class ColorRequestModel implements RequestModel {
    id: number;
    rgba: any[];
    display: number;
    method: number;

    constructor(color: ColorModel) {
        var rgb = color.rgbaValue.replace(/[^\d,]/g, '').split(',');
        this.rgba = rgb;
        this.display = 0;
    }
}
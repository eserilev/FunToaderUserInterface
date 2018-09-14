import { ColorModel } from "src/app/modules/color/models/color.model";
import { RequestModel } from "src/app/modules/main/models/request.model";

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
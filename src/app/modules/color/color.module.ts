import { NgModule } from "@angular/core";
import { ColorPanelComponent } from "./components/color-panel/color-panel.component";
import { ColorComponent } from "./components/color/color.component";
import { ColorControlPanelComponent } from "./components/color-control-panel/color-control-panel.component";
import { ColorPickerModule } from "ngx-color-picker";
import { ColorService } from "./services/color.service";
import { CommonModule } from "../main/common.module";

let components = [
  ColorComponent,
  ColorPanelComponent,
  ColorComponent,
  ColorControlPanelComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ColorPickerModule,
  ],
  providers: [

    ColorService,
  ],
  exports: [
    ...components
  ],
  entryComponents: [

  ],
  bootstrap: []
})
export class ColorModule { }

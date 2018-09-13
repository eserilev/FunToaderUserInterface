import { NgModule } from "@angular/core";
import { ColorPanelComponent } from "src/app/modules/color/components/color-panel/color-panel.component";
import { ColorComponent } from "src/app/modules/color/components/color/color.component";
import { ColorControlPanelComponent } from "src/app/modules/color/components/color-control-panel/color-control-panel.component";
import { MainModule } from "src/app/modules/main/main.module";
import { ColorPickerModule } from "ngx-color-picker";
import { ColorService } from "src/app/modules/color/services/color.service";


@NgModule({
  declarations: [
    ColorComponent,
    ColorPanelComponent,
    ColorComponent,
    ColorControlPanelComponent,
  ],
  imports: [
    MainModule,
    ColorPickerModule,
  ],
  providers: [
  
    ColorService,
  ],
  exports: [
    ColorComponent,
    ColorPanelComponent,
    ColorComponent,
    ColorControlPanelComponent,
  ],
  entryComponents: [
    
  ],
  bootstrap: []
})
export class ColorModule { }

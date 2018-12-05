import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgReduxModule } from "@angular-redux/store";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainExpansionPanelComponent } from './components/main-expansion-panel/main-expansion-panel.component';
import { HomeComponent } from "src/app/modules/main/components/home/home.component";
import { FileResourcePanelComponent } from "src/app/modules/main/components/file-resource-panel/file-resource-panel.component";
import { CommonService } from "src/app/modules/main/services/common.service";
import { MediaControllerComponent } from "src/app/modules/main/components/media-controller/media-controller.component";

let components = [
  FileResourcePanelComponent,
  MediaControllerComponent
]

let modules = [
  MaterialModule,
  BrowserModule,
  NgReduxModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
]

let services = [
  CommonService
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [

  ],
  exports: [
    ...modules,
    ...components

  ],
  entryComponents: [

  ],
  bootstrap: []
})
export class CommonModule { }


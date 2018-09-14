import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgReduxModule } from "@angular-redux/store";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainExpansionPanelComponent } from './components/main-expansion-panel/main-expansion-panel.component';
import { HomeComponent } from "src/app/modules/main/components/home/home.component";

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    NgReduxModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
  
  ],
  exports: [
      MaterialModule,
      BrowserModule,
      NgReduxModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
     
  ],
  entryComponents: [
    
  ],
  bootstrap: []
})
export class CommonModule { }


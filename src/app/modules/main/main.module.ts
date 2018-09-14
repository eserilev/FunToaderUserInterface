import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgReduxModule } from "@angular-redux/store";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainExpansionPanelComponent } from './components/main-expansion-panel/main-expansion-panel.component';
import { HomeComponent } from "src/app/modules/main/components/home/home.component";
import { CommonModule } from "src/app/modules/main/common.module";
import { MediaPlayerModule } from "src/app/modules/media-player/media-player.module";
import { MidiModule } from "src/app/modules/midi/midi.module";
import { ColorModule } from "src/app/modules/color/color.module";
import { MainConfigurationPanelComponent } from "src/app/modules/main/components/main-configuration-panel/main-configuration-panel.component";

@NgModule({
    declarations: [
        MainExpansionPanelComponent,
        HomeComponent,
        MainConfigurationPanelComponent
    ],
    imports: [
        CommonModule,
        MediaPlayerModule,
        MidiModule,
        ColorModule
    ],
    providers: [

    ],
    exports: [
        MainExpansionPanelComponent,
        HomeComponent
    ],
    entryComponents: [

    ],
    bootstrap: []
})
export class MainModule { }


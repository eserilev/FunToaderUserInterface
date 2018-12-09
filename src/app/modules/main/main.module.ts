import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgReduxModule } from "@angular-redux/store";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainExpansionPanelComponent } from './components/main-expansion-panel/main-expansion-panel.component';
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from "./common.module";
import { MediaPlayerModule } from "../media-player/media-player.module";
import { MidiModule } from "../midi/midi.module";
import { ColorModule } from "../color/color.module";
import { MainConfigurationPanelComponent } from "./components/main-configuration-panel/main-configuration-panel.component";
import { ContentViewerComponent } from "./components/content-viewer/content-viewer.component";
import { FileResourcePanelComponent } from "./components/file-resource-panel/file-resource-panel.component";
import { AudioModule } from "../audio/audio.module";

@NgModule({
    declarations: [
        MainExpansionPanelComponent,
        HomeComponent,
        MainConfigurationPanelComponent,
        ContentViewerComponent,
    ],
    imports: [
        CommonModule,
        MediaPlayerModule,
        MidiModule,
        ColorModule,
        AudioModule
    ],
    providers: [

    ],
    exports: [
        MainExpansionPanelComponent,
        HomeComponent,
        ContentViewerComponent
    ],
    entryComponents: [

    ],
    bootstrap: []
})
export class MainModule { }


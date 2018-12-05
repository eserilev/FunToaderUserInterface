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
import { ContentViewerComponent } from "src/app/modules/main/components/content-viewer/content-viewer.component";
import { FileResourcePanelComponent } from "src/app/modules/main/components/file-resource-panel/file-resource-panel.component";
import { AudioModule } from "src/app/modules/audio/audio.module";

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


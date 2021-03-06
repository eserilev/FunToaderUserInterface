import { NgModule } from "@angular/core";
import { CommonModule } from "../main/common.module";
import { AudioComponent } from './components/audio/audio.component';
import { AudioControlPanelComponent } from "../audio/components/audio-control-panel/audio-control-panel.component";
import { AudioSettingsComponent } from './components/audio-settings/audio-settings.component';

let components = [
    AudioComponent,
    AudioControlPanelComponent,
]

@NgModule({
    declarations: [
        ...components,
        AudioSettingsComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [
    ],
    exports: [
        ...components
    ],
    entryComponents: [

    ],
    bootstrap: []
})
export class AudioModule { }

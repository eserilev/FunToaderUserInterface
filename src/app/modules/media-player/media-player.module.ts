import { NgModule } from "@angular/core";
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { MaterialModule } from "../../material.module";
import { CommonModule } from "../main/common.module";
import { MediaPlayerService } from "./services/media-player.service";

let components = [
  VideoPlayerComponent
]

let modules = [
  VgCoreModule,
  VgControlsModule,
  VgOverlayPlayModule,
  VgBufferingModule,
  CommonModule
]

let services = [
  MediaPlayerService
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
   
  ],
  providers: [
    ...services
  ],
  exports: [
    ...components
  ],
  entryComponents: [
    
  ],
  bootstrap: []
})
export class MediaPlayerModule { }


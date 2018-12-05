import { NgModule } from "@angular/core";
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoPlayerComponent } from "src/app/modules/media-player/components/video-player/video-player.component";
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "src/app/modules/main/common.module";

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
    ...components
  ],
  entryComponents: [
    
  ],
  bootstrap: []
})
export class MediaPlayerModule { }


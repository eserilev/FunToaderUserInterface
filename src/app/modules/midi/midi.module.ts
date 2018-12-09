import { NgModule } from "@angular/core";

import { MidiComponent } from "./components/midi/midi.component";

import { MidiService } from './services/midi.service';
import { CommonModule } from "../main/common.module";

let components =  [
  MidiComponent,

]

@NgModule({
  declarations: [
      MidiComponent
  ],
  imports: [

    CommonModule
    
  ],
  providers: [
    MidiService
  ],
  exports: [
    MidiComponent
  ],
  entryComponents: [
    
  ],
  bootstrap: []
})
export class MidiModule { }


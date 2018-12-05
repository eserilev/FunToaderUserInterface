import { NgModule } from "@angular/core";

import { MidiComponent } from "src/app/modules/midi/components/midi/midi.component";

import { MidiService } from 'src/app/modules/midi/services/midi.service';
import { CommonModule } from "src/app/modules/main/common.module";

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


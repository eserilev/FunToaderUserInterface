import { NgModule } from "@angular/core";

import { MainModule } from "src/app/modules/main/main.module";
import { MidiComponent } from "src/app/modules/midi/components/midi/midi.component";

import { MidiService } from 'src/app/modules/midi/services/midi.service';

@NgModule({
  declarations: [
      MidiComponent
  ],
  imports: [

    MainModule
    
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


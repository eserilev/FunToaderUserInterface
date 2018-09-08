import { Component, OnInit } from '@angular/core';
import { MidiService } from 'src/app/modules/midi/services/midi.service';
import { select } from '@angular-redux/store/lib/src/decorators/select';
import { Observable } from 'rxjs/internal/Observable';



function onMIDIMessage(event): WebMidi.MIDIMessageEvent {
  console.log("msg received", event);
  return event;
}
@Component({
  selector: 'app-midi',
  templateUrl: './midi.component.html',
  styleUrls: ['./midi.component.css']
})
export class MidiComponent implements OnInit {

  @select(s => s.midi.midiInputs) midiInputsObs: Observable<WebMidi.MIDIInput[]>
  midiInputs: WebMidi.MIDIInput[];
  selectedMidi: WebMidi.MIDIInput;
  constructor(
    private midiService: MidiService
  ) { }

  ngOnInit() {
   // this.midiService.initMidiStream();
    this.midiService.getMidiDevices();
    this.midiInputsObs.subscribe(res => {
      this.midiInputs = res;
    });
  }

  selectMidiChange($event) {
    this.midiService.selectMidiDevice(this.selectedMidi);
   // var e: WebMidi.MIDIMessageEvent
//e = onMIDIMessage;
    this.selectedMidi.onmidimessage = onMIDIMessage
  }

  test() {

  }


}

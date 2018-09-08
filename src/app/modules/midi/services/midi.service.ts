import { Injectable } from '@angular/core';
import { Observable, from, Subject } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { IMidiState } from 'src/app/modules/midi/midi.store';
import { GET_MIDI_DEVICES, GET_MIDI_DEVICES_SUCCESS, GET_MIDI_DEVICES_FAILURE, SELECT_MIDI_DEVICE, START_RECORDING_MIDI, STOP_MIDI, START_MIDI } from 'src/app/modules/midi/midi.actions';
import { RequestModel } from 'src/app/modules/main/models/request.model';


@Injectable({
  providedIn: 'root'
})
export class MidiService {

  messages: any;
  cd: any;
  messages$: Observable<any>;
  navigator: any

  constructor(
    private ngRedux: NgRedux<IMidiState>
  ) { }


  getMidiDevices() {
    this.ngRedux.dispatch({ type: GET_MIDI_DEVICES, midiInputs: [] })
    if (navigator.requestMIDIAccess) {
      (navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this)))
    }

    var midiAccess$ = from(navigator.requestMIDIAccess());
    console.log(midiAccess$);
    midiAccess$.subscribe(devices => {
      var midiInputs: WebMidi.MIDIInput[] = [];
      devices.inputs.forEach((key, port) => {
        this.ngRedux.dispatch({ type: GET_MIDI_DEVICES_SUCCESS, midiInput: key })
      });
    }, err => {
      this.ngRedux.dispatch({ type: GET_MIDI_DEVICES_FAILURE, error: err })
    });
  }

  startRecordingMidi() {
    this.ngRedux.dispatch({type: START_RECORDING_MIDI});

  }

  startMidi() {
    this.ngRedux.dispatch({type: START_MIDI});
  }

  //stops midi live and midi recording
  stopMidi() {
    this.ngRedux.dispatch({type: STOP_MIDI});
  }

  onMIDIMessage(event: WebMidi.MIDIMessageEvent) {
    //console.log("msg received", event.data);
    var key = event.data[1];
    console.log("msg received",key);
  }

  onMIDIFailure(e) {
    console.log(e);
  }

  selectMidiDevice(midi: WebMidi.MIDIInput) {
    this.ngRedux.dispatch({ type: SELECT_MIDI_DEVICE, selectedInput: midi });
  }

  onMIDISuccess(midiAccess) {
    console.log('MIDI Access Object', midiAccess);
    var midi = midiAccess;
    console.log(midi);

    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = this.onMIDIMessage;
    }

  }

  mapMidiCommand(command: RequestModel) {

  }

  private midiMessageAsObservable(input) {
    const source = new Subject();
    input.onmidimessage = note => source.next(note);
    return source.asObservable();
  }

}

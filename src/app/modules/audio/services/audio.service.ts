import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAudioState } from 'src/app/modules/audio/audio.store';
import { IMidiState } from 'src/app/modules/midi/midi.store';
import { HttpClient } from '@angular/common/http';
import { MidiService } from 'src/app/modules/midi/services/midi.service';
import { CHANGE_AUDIO_TIMER, CHANGE_AUDIO_COUNT } from 'src/app/modules/audio/audio.actions';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(
    private audioRedux: NgRedux<IAudioState>,
    private midiRedux: NgRedux<IMidiState>,
    private http: HttpClient,
    private midiService: MidiService
  ) { }

  public changeTimer(timer: number) {
    this.audioRedux.dispatch({type: CHANGE_AUDIO_TIMER, timer: timer});
  }

  public changeCount(count: number) {
    this.audioRedux.dispatch({type: CHANGE_AUDIO_COUNT, count: count});
  }
}

import { Injectable } from '@angular/core';
import { IColorState } from 'src/app/modules/color/color.store';
import { NgRedux } from '@angular-redux/store';
import { ColorModel } from '../models/color.model';
import { Rgba } from 'ngx-color-picker/dist/lib/formats';
import { GET_COLOR_LIST_SUCCESS, SEND_COLOR_MESSAGE, SEND_COLOR_MESSAGE_SUCCESS, SEND_COLOR_MESSAGE_FAILURE, CHANGE_COLOR } from '../color.actions';
import { ColorRequestModel } from '../models/color-request.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IMidiState } from '../../midi/midi.store';
import { MidiService } from '../../midi/services/midi.service';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private baseUrl = environment.apiUrl + 'color/';
  constructor(
    private ngRedux: NgRedux<IColorState>,
    private midiRedux: NgRedux<IMidiState>,
    private http: HttpClient,
    private midiService: MidiService
  ) { }

  initColors() {
    var list = [];
    var c1 = new ColorModel();
    c1.index = 1;
    c1.rgbaValue = 'rgb(255,0,0)'
    c1.selected = false;
    var c2 = new ColorModel();
    c2.index = 2;
    c2.rgbaValue = 'rgb(30,255,0)';
    c2.selected = false;
    var c3 = new ColorModel();
    c3.index = 3;
    c3.rgbaValue = 'rgb(33,137,33)';
    c3.selected = false;
    var c4 = new ColorModel();
    c4.index = 4;
    c4.rgbaValue = 'rgb(0,0,255)';
    c4.selected = false;
    var c5 = new ColorModel();
    c5.index = 5;
    c5.rgbaValue = 'rgb(0,216,255)';
    c5.selected = false;  
    var c6 = new ColorModel();
    c6.index = 6;
    c6.rgbaValue = 'rgb(52,216,255)';
    c6.selected = false;  
    list.push(c1); list.push(c2); list.push(c3); list.push(c4); list.push(c5); list.push(c6);
    this.ngRedux.dispatch({type: GET_COLOR_LIST_SUCCESS, colorList: list})
    
  }

  sendColorMessage(color: ColorModel) {
    var c = new ColorRequestModel(color);
    if(this.midiRedux.getState().midiRecord === true) {
     // this.midiService.mapMidiCommand(color);
    }
    this.ngRedux.dispatch({type: SEND_COLOR_MESSAGE, selectedColor: color});
    this.http.post(this.baseUrl, c)
      .subscribe(res => {
        console.log(res);
        this.ngRedux.dispatch({type: SEND_COLOR_MESSAGE_SUCCESS});
      }, err=> {
        console.log(err);
        this.ngRedux.dispatch({type: SEND_COLOR_MESSAGE_FAILURE});
      })
  }

  changeColor(color: ColorModel) {
    this.ngRedux.dispatch({type: CHANGE_COLOR, color: color});
  }
}

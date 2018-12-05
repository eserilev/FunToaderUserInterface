import { Injectable } from '@angular/core';
import { MediaPanelType } from 'src/app/modules/main/enums/media-panel-type.enum';
import { ICommonState } from 'src/app/modules/main/common.store';
import { NgRedux } from '@angular-redux/store';
import { CHANGE_MEDIA_PANEL } from 'src/app/modules/main/common.actions';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private ngRedux: NgRedux<ICommonState>,
  ) { }

  changeMediaPanel(selectedPanel: MediaPanelType) {
    this.ngRedux.dispatch({type: CHANGE_MEDIA_PANEL, selectedPanel: selectedPanel});
  }
}

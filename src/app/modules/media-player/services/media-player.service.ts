import { Injectable } from '@angular/core';
import { IMediaPlayerState } from '../media-player.store';
import { NgRedux } from '@angular-redux/store';
import { MediaPanelType } from '../../main/enums/media-panel-type.enum';
import { UPDATE_CURRENT_MEDIA_TYPE } from '../media-player.actions';

@Injectable({
  providedIn: 'root'
})
export class MediaPlayerService {

  constructor(
    private ngRedux: NgRedux<IMediaPlayerState>,
  ) { }

  changeMediaPanel(mediaType: MediaPanelType) {
    this.ngRedux.dispatch({type: UPDATE_CURRENT_MEDIA_TYPE, mediaType: mediaType});
  }
}

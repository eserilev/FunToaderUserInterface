import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ColorModel } from '../../../color/models/color.model';
import { MediaPlayerService } from '../../../media-player/services/media-player.service';
import { MediaPanelType } from '../../../main/enums/media-panel-type.enum';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  public selectedColor: ColorModel;
  public selectedAudio: AudioModel;
  public mediaType: MediaPanelType = MediaPanelType.Video;
  public mediaTypeEnum = MediaPanelType;

  @select(s => s.color.selectedColor) colorListObs: Observable<ColorModel>;
  @select(s => s.media.mediaType) mediaTypeObs: Observable<MediaPanelType>;
  constructor(
    private mediaPlayerService: MediaPlayerService
  ) { }

  ngOnInit() {
    this.colorListObs.subscribe(selectedColor => {
      this.selectedColor = selectedColor;
      if (this.selectedColor == null) return;
      return this.mediaPlayerService.changeMediaPanel(MediaPanelType.Color)
    });

    this.mediaTypeObs.subscribe(mediaType => {
      this.mediaType = mediaType;
    })
  }

}

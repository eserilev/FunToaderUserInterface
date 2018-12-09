import { Component, OnInit } from '@angular/core';
import { MediaPanelType } from '../../enums/media-panel-type.enum';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'main-expansion-panel',
  templateUrl: './main-expansion-panel.component.html',
  styleUrls: ['./main-expansion-panel.component.css']
})
export class MainExpansionPanelComponent implements OnInit {

  selectedInterface: MediaPanelType

  public interfaces: MediaPanelType[] = [
    MediaPanelType.Audio,
    MediaPanelType.Color,
    MediaPanelType.Effects,
    MediaPanelType.Sequence,
    MediaPanelType.Slideshow,
    MediaPanelType.Video
  ]
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  setSelectedInterface(i: MediaPanelType) {
    this.selectedInterface = i;
    this.commonService.changeMediaPanel(this.selectedInterface);
  
  }

}


import { Component, OnInit } from '@angular/core';
import { MediaFile } from 'src/app/modules/main/models/media-file.model';

@Component({
  selector: 'file-resource-panel',
  templateUrl: './file-resource-panel.component.html',
  styleUrls: ['./file-resource-panel.component.css']
})
export class FileResourcePanelComponent implements OnInit {

  files: MediaFile[] = [];
  selectArray: number[] =  Array(5).fill(0).map((x,i)=>i);

  constructor() { }

  ngOnInit() {
   
  }

}

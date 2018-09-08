import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/modules/color/services/color.service';

@Component({
  selector: 'app-color-control-panel',
  templateUrl: './color-control-panel.component.html',
  styleUrls: ['./color-control-panel.component.css']
})
export class ColorControlPanelComponent implements OnInit {

  maxCount = 250;
  maxTimer = 60000;
  count: number;
  time: number;
  constructor(
    private colorService: ColorService
  ) { }


  ngOnInit() {
  }

  timeChanged() {
    if(this.time > this.maxTimer) this.time = this.maxTimer;
  }

  countChanged() {
    if(this.count > this.maxCount) this.count = this.maxCount;
  }

  runSelectedColors() {

  }

  runColor() {

  }



}

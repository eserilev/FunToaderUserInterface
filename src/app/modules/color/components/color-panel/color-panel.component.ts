import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ColorModel } from '../../models/color.model';
import { ColorRequestModel } from '../../models/color-request.model';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.css']
})
export class ColorPanelComponent implements OnInit {

  @Input() color: ColorModel;
  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
  }

  logColor() {  
    this.colorService.sendColorMessage(this.color);
  }

  colorChange() {
    console.log(this.color);
    this.colorService.changeColor(this.color);
  }

}

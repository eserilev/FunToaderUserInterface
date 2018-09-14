import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ColorModel } from 'src/app/modules/color/models/color.model';
import { select } from '@angular-redux/store';
import { ColorService } from 'src/app/modules/color/services/color.service';

@Component({
  selector: 'color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @select(s => s.color.colorList) colorListObs: Observable<ColorModel[]>;
  colorList: ColorModel[];
  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
    this.colorService.initColors();
    this.colorListObs.subscribe(res => {
      this.colorList = res;
    })
  }

}

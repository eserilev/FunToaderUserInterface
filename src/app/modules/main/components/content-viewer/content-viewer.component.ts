import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ColorModel } from 'src/app/modules/color/models/color.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent implements OnInit {

  @select(s => s.color.selectedColor) selectedColorObs: Observable<ColorModel>;
  color: ColorModel;
  constructor() { }

  ngOnInit() {
    this.selectedColorObs
      .subscribe(res => {
        this.color = res;
      })

  }

}

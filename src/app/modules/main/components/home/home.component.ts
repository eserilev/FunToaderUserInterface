import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'color-fill',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-format_color_fill.svg'));
  }

}

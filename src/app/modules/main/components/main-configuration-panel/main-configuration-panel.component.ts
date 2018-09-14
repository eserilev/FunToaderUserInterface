import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-configuration-panel',
  templateUrl: './main-configuration-panel.component.html',
  styleUrls: ['./main-configuration-panel.component.css']
})
export class MainConfigurationPanelComponent implements OnInit {

  repeatCommands: any;
  mainDelay: any;
  isLive: any;

  constructor() { }

  ngOnInit() {
  }

}

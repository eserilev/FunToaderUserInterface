import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MediaPanelType } from 'src/app/modules/main/enums/media-panel-type.enum';
import { select } from '@angular-redux/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  MediaPanelType = MediaPanelType;
  public selectedMediaPanel: MediaPanelType;
  @select(s => s.common.selectedPanel) selectedMediaPanelObs: Observable<MediaPanelType>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  
    this.getIcons();

    this.selectedMediaPanelObs
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedMediaPanel = res;
        console.log(res);
      });
  }

  getIcons() {
    this.iconRegistry.addSvgIcon(
      'color-fill',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-format_color_fill.svg')
    );

    this.iconRegistry.addSvgIcon(
      'play-circle-outline',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-play_circle_outline.svg')
    );

    this.iconRegistry.addSvgIcon(
      'pause-circle-outline',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-pause_circle_outline.svg')
    );

    this.iconRegistry.addSvgIcon(
      'stop',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-stop.svg')
    );
  }

  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}

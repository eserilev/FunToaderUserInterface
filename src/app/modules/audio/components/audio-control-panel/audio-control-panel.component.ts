import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { MediaPanelType } from 'src/app/modules/main/enums/media-panel-type.enum';
import { Observable, Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AudioPage } from 'src/app/modules/audio/models/audio-page.model';

@Component({
  selector: 'audio-control-panel',
  templateUrl: './audio-control-panel.component.html',
  styleUrls: ['./audio-control-panel.component.css']
})
export class AudioControlPanelComponent implements OnInit, OnDestroy {


  @select(s => s.audio.currentPage) currentPageObs: Observable<number>;
  @select(s => s.audio.audioPages) audioPagesObs: Observable<AudioPage[]>;


  public currentPage: number;
  public audioPages: AudioPage[];

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {

  }

  subscribeSettings() {
    this.audioPagesObs.pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.audioPages = res;
    });

  this.currentPageObs.pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.currentPage = res;
    })
  }

}

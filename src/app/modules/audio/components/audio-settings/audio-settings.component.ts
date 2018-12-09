import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subject } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AudioService } from '../../services/audio.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'audio-settings',
  templateUrl: './audio-settings.component.html',
  styleUrls: ['./audio-settings.component.css']
})
export class AudioSettingsComponent implements OnInit, OnDestroy {


  @select(s => s.audio.count) countObs: Observable<number>;
  @select(s => s.audio.timer) timerObs: Observable<number>;

  public count: number;
  public timer: number;
  public isAutoRestart: boolean = false;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private audioService: AudioService
  ) { }

  ngOnInit() {
    this.subscribeSettings();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  subscribeSettings() {

    this.countObs.pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.count = res;
      });

    this.timerObs.pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.timer = res;
      });

  
  }

  changeCount() {
    this.audioService.changeCount(this.count);
  }

  changeTimer() {
    this.audioService.changeTimer(this.timer);
  }

}

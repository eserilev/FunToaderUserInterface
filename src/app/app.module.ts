import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, APP_INITIAL_STATE, rootReducer } from 'src/app/app.store';
import { isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentViewerComponent } from './modules/main/components/content-viewer/content-viewer.component';
import { MaterialModule } from 'src/app/material.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaPlayerModule } from 'src/app/modules/media-player/media-player.module';
import { ColorModule } from 'src/app/modules/color/color.module';
import { MidiModule } from 'src/app/modules/midi/midi.module';

@NgModule({
  declarations: [
    AppComponent,

    ContentViewerComponent
  ],
  imports: [
    BrowserModule,

    NgReduxModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MediaPlayerModule,
    ColorModule,
    MidiModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      rootReducer,
      APP_INITIAL_STATE,
      null,
      enhancers
    );
  }
 }

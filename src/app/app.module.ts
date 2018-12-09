import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, APP_INITIAL_STATE, rootReducer } from './app.store';
import { isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentViewerComponent } from './modules/main/components/content-viewer/content-viewer.component';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaPlayerModule } from './modules/media-player/media-player.module';
import { ColorModule } from './modules/color/color.module';
import { MidiModule } from './modules/midi/midi.module';
import { MainModule } from './modules/main/main.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPanelComponent } from 'src/app/modules/color/components/color-panel/color-panel.component';
import { ColorComponent } from 'src/app/modules/color/components/color/color.component';
import { ColorControlPanelComponent } from 'src/app/modules/color/components/color-control-panel/color-control-panel.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, APP_INITIAL_STATE, rootReducer } from 'src/app/app.store';
import { isDevMode } from '@angular/core';
import { ColorService } from 'src/app/modules/color/services/color.service';
import { FormsModule } from '@angular/forms';
import { MidiComponent } from './modules/midi/components/midi/midi.component';
import { MidiService } from 'src/app/modules/midi/services/midi.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentViewerComponent } from './modules/main/components/content-viewer/content-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPanelComponent,
    ColorComponent,
    ColorControlPanelComponent,
    MidiComponent,
    ContentViewerComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    NgReduxModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    ColorService,
    MidiService
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

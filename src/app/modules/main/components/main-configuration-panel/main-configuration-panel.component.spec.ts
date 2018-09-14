import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConfigurationPanelComponent } from './main-configuration-panel.component';

describe('MainConfigurationPanelComponent', () => {
  let component: MainConfigurationPanelComponent;
  let fixture: ComponentFixture<MainConfigurationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConfigurationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConfigurationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

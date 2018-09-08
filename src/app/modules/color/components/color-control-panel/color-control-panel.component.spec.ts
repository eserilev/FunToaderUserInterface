import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorControlPanelComponent } from './color-control-panel.component';

describe('ColorControlPanelComponent', () => {
  let component: ColorControlPanelComponent;
  let fixture: ComponentFixture<ColorControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

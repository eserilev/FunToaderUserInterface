import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpansionPanelComponent } from './main-expansion-panel.component';

describe('MainExpansionPanelComponent', () => {
  let component: MainExpansionPanelComponent;
  let fixture: ComponentFixture<MainExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

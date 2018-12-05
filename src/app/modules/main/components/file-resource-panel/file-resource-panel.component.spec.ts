import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileResourcePanelComponent } from './file-resource-panel.component';

describe('FileResourcePanelComponent', () => {
  let component: FileResourcePanelComponent;
  let fixture: ComponentFixture<FileResourcePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileResourcePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileResourcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

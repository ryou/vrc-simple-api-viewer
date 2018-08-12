import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancePageComponent } from './instance-page.component';

describe('InstancePageComponent', () => {
  let component: InstancePageComponent;
  let fixture: ComponentFixture<InstancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

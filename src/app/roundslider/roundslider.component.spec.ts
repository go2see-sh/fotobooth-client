import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsliderComponent } from './roundslider.component';

describe('RoundsliderComponent', () => {
  let component: RoundsliderComponent;
  let fixture: ComponentFixture<RoundsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

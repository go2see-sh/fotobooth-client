import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivewiewComponent } from './livewiew.component';

describe('LivewiewComponent', () => {
  let component: LivewiewComponent;
  let fixture: ComponentFixture<LivewiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivewiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivewiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

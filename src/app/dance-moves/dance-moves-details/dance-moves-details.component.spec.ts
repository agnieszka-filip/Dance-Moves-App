import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceMovesDetailsComponent } from './dance-moves-details.component';

describe('DanceMovesDetailsComponent', () => {
  let component: DanceMovesDetailsComponent;
  let fixture: ComponentFixture<DanceMovesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceMovesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceMovesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

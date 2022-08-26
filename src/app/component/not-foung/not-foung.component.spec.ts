import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoungComponent } from './not-foung.component';

describe('NotFoungComponent', () => {
  let component: NotFoungComponent;
  let fixture: ComponentFixture<NotFoungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

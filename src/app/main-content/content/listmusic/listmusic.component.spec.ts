import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmusicComponent } from './listmusic.component';

describe('ListmusicComponent', () => {
  let component: ListmusicComponent;
  let fixture: ComponentFixture<ListmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

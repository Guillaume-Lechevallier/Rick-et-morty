import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRickapiComponent } from './list-rickapi.component';

describe('ListRickapiComponent', () => {
  let component: ListRickapiComponent;
  let fixture: ComponentFixture<ListRickapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRickapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRickapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

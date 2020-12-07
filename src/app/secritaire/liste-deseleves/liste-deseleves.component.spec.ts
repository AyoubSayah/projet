import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeselevesComponent } from './liste-deseleves.component';

describe('ListeDeselevesComponent', () => {
  let component: ListeDeselevesComponent;
  let fixture: ComponentFixture<ListeDeselevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeselevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeselevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecritaireComponent } from './secritaire.component';

describe('SecritaireComponent', () => {
  let component: SecritaireComponent;
  let fixture: ComponentFixture<SecritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

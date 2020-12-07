import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdemandesComponent } from './consulterdemandes.component';

describe('ConsulterdemandesComponent', () => {
  let component: ConsulterdemandesComponent;
  let fixture: ComponentFixture<ConsulterdemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterdemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

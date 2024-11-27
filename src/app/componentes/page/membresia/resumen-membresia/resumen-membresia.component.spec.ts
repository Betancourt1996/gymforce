import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenMembresiaComponent } from './resumen-membresia.component';

describe('ResumenMembresiaComponent', () => {
  let component: ResumenMembresiaComponent;
  let fixture: ComponentFixture<ResumenMembresiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenMembresiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

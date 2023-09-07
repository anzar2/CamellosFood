import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCarritoPage } from './detalle-carrito.page';

describe('DetalleCarritoPage', () => {
  let component: DetalleCarritoPage;
  let fixture: ComponentFixture<DetalleCarritoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

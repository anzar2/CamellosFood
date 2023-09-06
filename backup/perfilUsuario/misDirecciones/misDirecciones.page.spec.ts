import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisDireccionesPage } from './misDirecciones.page';

describe('MisDireccionesPage', () => {
  let component: MisDireccionesPage;
  let fixture: ComponentFixture<MisDireccionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisDireccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

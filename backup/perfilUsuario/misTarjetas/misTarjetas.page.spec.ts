import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisTarjetasPage } from './misTarjetas.page';

describe('MisTarjetasPage', () => {
  let component: MisTarjetasPage;
  let fixture: ComponentFixture<MisTarjetasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisTarjetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargandopagePage } from './cargandopage.page';

describe('CargandopagePage', () => {
  let component: CargandopagePage;
  let fixture: ComponentFixture<CargandopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargandopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

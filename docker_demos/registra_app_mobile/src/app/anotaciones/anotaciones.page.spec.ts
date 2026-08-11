import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnotacionesPage } from './anotaciones.page';

describe('AnotacionesPage', () => {
  let component: AnotacionesPage;
  let fixture: ComponentFixture<AnotacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnotacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

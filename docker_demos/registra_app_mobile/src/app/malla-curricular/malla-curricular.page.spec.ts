import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MallaCurricularPage } from './malla-curricular.page';

describe('MallaCurricularPage', () => {
  let component: MallaCurricularPage;
  let fixture: ComponentFixture<MallaCurricularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MallaCurricularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

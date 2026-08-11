import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEST1Page } from './test1.page';

describe('TEST1Page', () => {
  let component: TEST1Page;
  let fixture: ComponentFixture<TEST1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TEST1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

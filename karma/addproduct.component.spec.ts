import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductComponent } from './addproduct.component';

describe('AddproductComponent', () => {
  let component: AddproductComponent;
  let fixture: ComponentFixture<AddproductComponent>;
  let router:any;
  let addproductService:any;
  beforeEach(() => {
    component = new AddproductComponent(router,addproductService);
  });
  it('test_case6', () => {
    expect(component).toBeTruthy();
  });
});

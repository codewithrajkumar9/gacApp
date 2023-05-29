import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistaionComponent } from './registaion.component';

describe('RegistaionComponent', () => {
  let component: RegistaionComponent;
  let fixture: ComponentFixture<RegistaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistaionComponent]
    });
    fixture = TestBed.createComponent(RegistaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

describe('ButtonComponent', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Button],
    });
    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

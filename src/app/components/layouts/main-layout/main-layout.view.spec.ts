import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutView } from './main-layout.view';

describe('MainLayoutView', () => {
  let component: MainLayoutView;
  let fixture: ComponentFixture<MainLayoutView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

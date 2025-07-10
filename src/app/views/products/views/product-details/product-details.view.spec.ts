import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsView } from './product-details.view';

describe('ProductDetailsView', () => {
  let component: ProductDetailsView;
  let fixture: ComponentFixture<ProductDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

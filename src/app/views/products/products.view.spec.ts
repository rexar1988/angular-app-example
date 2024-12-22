import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsView } from './products.view';

describe('ProductsView', () => {
  let component: ProductsView;
  let fixture: ComponentFixture<ProductsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsView],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

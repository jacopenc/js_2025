import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductList } from './componente-product-list';

describe('ComponenteProductList', () => {
  let component: ComponenteProductList;
  let fixture: ComponentFixture<ComponenteProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

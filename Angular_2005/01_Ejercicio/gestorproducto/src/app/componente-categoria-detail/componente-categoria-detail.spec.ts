import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCategoriaDetail } from './componente-categoria-detail';

describe('ComponenteCategoriaDetail', () => {
  let component: ComponenteCategoriaDetail;
  let fixture: ComponentFixture<ComponenteCategoriaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCategoriaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCategoriaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoIndividualPage } from './produto-individual.page';

describe('ProdutoIndividualPage', () => {
  let component: ProdutoIndividualPage;
  let fixture: ComponentFixture<ProdutoIndividualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

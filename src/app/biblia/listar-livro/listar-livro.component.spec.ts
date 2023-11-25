import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLivroComponent } from './listar-livro.component';

describe('ListarLivroComponent', () => {
  let component: ListarLivroComponent;
  let fixture: ComponentFixture<ListarLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLivroComponent]
    });
    fixture = TestBed.createComponent(ListarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

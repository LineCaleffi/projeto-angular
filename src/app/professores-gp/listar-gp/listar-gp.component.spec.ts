import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGPComponent } from './listar-gp.component';

describe('ListarGPComponent', () => {
  let component: ListarGPComponent;
  let fixture: ComponentFixture<ListarGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFinanceiroPlanejamentoComponent } from './aba-financeiro-planejamento.component';

describe('AbaFinanceiroPlanejamentoComponent', () => {
  let component: AbaFinanceiroPlanejamentoComponent;
  let fixture: ComponentFixture<AbaFinanceiroPlanejamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFinanceiroPlanejamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFinanceiroPlanejamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

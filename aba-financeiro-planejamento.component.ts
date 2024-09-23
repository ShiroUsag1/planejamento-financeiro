import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MockQuiz } from '../../model/mockquiz';
import { Pergunta, Opcao } from '../../model/quiz';
import { CalendarioFinanceiroComponent } from "../calendario-financeiro/calendario-financeiro.component";

@Component({
  selector: 'app-aba-financeiro-planejamento',
  standalone: true,
  imports: [CommonModule, CalendarioFinanceiroComponent],
  templateUrl: './aba-financeiro-planejamento.component.html',
  styleUrl: './aba-financeiro-planejamento.component.scss',
})
export class AbaFinanceiroPlanejamentoComponent {

  perguntas: Pergunta[] = MockQuiz.getDados();
  perguntaAtual: Pergunta | undefined = this.perguntas[0];
  recomendacaoFinal: string | undefined;

  selecionarOpcao(opcao: Opcao) {
    if (opcao.recomendacao) {
      this.recomendacaoFinal = opcao.recomendacao;
      this.perguntaAtual = undefined;
    } else {
      this.perguntaAtual = this.perguntas.find(
        (p) => p.id === opcao.proximaPerguntaId
      );
    }
  }

  reiniciarQuiz() {
    this.perguntaAtual = this.perguntas[0];
    this.recomendacaoFinal = undefined;
  }
}

import { Component, inject, signal } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeService } from '../../services/filme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-consulta-filme',
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-filme.html',
  standalone: true,
  styleUrl: './consulta-filme.css',
})
export class ConsultaFilme {
  filmeService = inject(FilmeService)

  pesquisa = ''

  filme = signal<Filme | undefined>(undefined);

  buscar() {

  if (!this.pesquisa.trim()) return;

  this.filmeService.obterFilme(this.pesquisa).subscribe({
    next: (res) => {
      this.filme.set(res)
    }
  });

}
}

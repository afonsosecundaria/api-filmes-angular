import { Component, inject, signal } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeService } from '../../services/filme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-filme',
  imports: [CommonModule],
  templateUrl: './consulta-filme.html',
  standalone: true,
  styleUrl: './consulta-filme.css',
})
export class ConsultaFilme {
  filmeService = inject(FilmeService)

  filme = signal<Filme | undefined>(undefined);

  constructor() {
    this.filmeService.obterFilme('Guardians of the Galaxy: Vol. 2').subscribe({
      next: (res) => {
        this.filme.set(res)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}

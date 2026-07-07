import { Component, signal } from '@angular/core';
import { ConsultaFilme } from './components/consulta-filme/consulta-filme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsultaFilme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-filmes');
}

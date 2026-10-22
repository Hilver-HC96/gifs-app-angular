import { Component, computed, signal } from '@angular/core';
import { Gif } from './interfaces/gif.interface';
import { GifCard } from './components/gif-card/gif-card';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [GifCard],
})

@Component ({
  selector: 'app-root',
  imports: [GifCard],
  styleUrl: './app.css',
  templateUrl: './app.html'


})
export class App {
  protected readonly totalBusquedas = signal(0);
  protected readonly terminoBusqueda= signal('');

  protected readonly busquedaValida = computed (
    ()=> this.terminoBusqueda().trim().length > 0
  );

  protected readonly terminoConfirmado = signal('');

  protected readonly catalogoGifs: Gif[] = [
    {
      id: 1,
      titulo: 'Gato programador',
      url: 'https://placehold.co/300x180?text=Gato',
      categoria: 'gatos',
    },
    {
      id: 2,
      titulo: 'Gato sorprendido',
      url: 'https://placehold.co/300x180?text=Gato+Sorprendido',
      categoria: 'gatos',
    },
    {
      id: 3,
      titulo: 'Fútbol en acción',
      url: 'https://placehold.co/300x180?text=Futbol',
      categoria: 'deportes',
    },
    {
      id: 4,
      titulo: 'Videojuegos',
      url: 'https://placehold.co/300x180?text=Videojuegos',
      categoria: 'videojuegos',
    },
  ];

  protected buscarGifs(): void {
    if (!this.busquedaValida()) {
      return;
    }

    this.terminoConfirmado.set(
      this.terminoBusqueda().trim()
    )

      this.totalBusquedas.update(total=> total+1);
    }

  protected actualizarBusqueda(event: Event):void {
      const input = event.target as HTMLInputElement;
      this.terminoBusqueda.set(input.value);
    }

  protected readonly resultadosGifs = computed(()=> {
      const termino = this.terminoConfirmado();

      if(termino.length === 0){
        return [];
      }

      return this.catalogoGifs.filter (gif =>
        gif.titulo.toLowerCase().includes(termino) ||
        gif.categoria.toLowerCase().includes(termino)
    );

    });
}

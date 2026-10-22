import { Gif } from './../../interfaces/gif.interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  styleUrl: './gif-card.css',
  templateUrl: './gif-card.html',
})

export class GifCard {
  readonly gif = input.required<Gif>()
}

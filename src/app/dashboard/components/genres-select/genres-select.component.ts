import { Component, Input, OnInit } from '@angular/core';
import { GenresSelect } from '../../../interfaces/genres-select';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.scss'],
})
export class GenresSelectComponent {
  @Input() genres: GenresSelect[];
  @Input() selectedGenres: string[];
  constructor() {}
}

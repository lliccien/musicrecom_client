import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackRecommended } from '../../../interfaces/track-recommended';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.scss'],
})
export class CardTrackComponent {
  @Input() track: TrackRecommended;
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  randomized() {
    this.refresh.emit(true);
  }

  openExternal() {
    window.open(this.track.external, '_blank');
  }
}

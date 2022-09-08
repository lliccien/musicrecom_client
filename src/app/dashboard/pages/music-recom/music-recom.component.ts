import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SpotifyService } from '../../../services/spotify.service';
import { TrackRecommended } from '../../../interfaces/track-recommended';

@Component({
  selector: 'app-music-recom',
  templateUrl: './music-recom.component.html',
  styleUrls: ['./music-recom.component.scss'],
})
export class MusicRecomComponent implements OnInit {
  userId: string;
  track: TrackRecommended;
  constructor(
    private authService: AuthService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.userId;
    this.loadTrack();
  }

  loadTrack() {
    this.spotifyService.getTracksByUser(this.userId!).subscribe(track => {
      this.track = track;
    });
  }
}

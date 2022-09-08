import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SpotifyService } from '../../../services/spotify.service';
import { GenresSelect } from '../../../interfaces/genres-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})
export class ProfileComponent implements OnInit {
  genres: GenresSelect[];
  selectedGenres: string[];
  username: string;
  profileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private spotifyService: SpotifyService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.spotifyService.getGenres().subscribe(resp => {
      this.genres = resp;
    });

    this.authService.getUser().subscribe(resp => {
      this.username = resp.username;
      this.selectedGenres = resp.genres;
    });

    this.profileForm = this.fb.group({
      genres: [
        '',
        [Validators.minLength(3), Validators.minLength(3), Validators.required],
      ],
    });

    this.primengConfig.ripple = true;
  }

  submitProfile() {
    const genres = this.profileForm.value.genres;
    this.authService.updateUserGenres(genres).subscribe(resp => {
      this.messageService.add({
        key: 'bc',
        severity: 'info',
        summary: 'Info',
        detail: 'Genres updated',
      });
    });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }
}

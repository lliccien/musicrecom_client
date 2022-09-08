import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.primengConfig.ripple = true;
  }

  signin() {
    const { username, password } = this.signinForm.value;

    this.authService.signin({ username, password }).subscribe(resp => {
      if (resp?.access_token !== undefined) {
        console.log(
          this.authService.user &&
            this.authService.user.genres &&
            this.authService.user.genres.length
        );
        if (
          this.authService.user &&
          this.authService.user.genres &&
          this.authService.user.genres.length > 0
        ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/dashboard/profile');
        }
      } else {
        this.messageService.add({
          key: 'bc',
          severity: 'error',
          summary: 'Error',
          detail: `Error: ${resp}`,
        });
      }
    });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }
}

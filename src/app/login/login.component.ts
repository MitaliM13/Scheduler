import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  private validUsers = [
    { username: 'admin1', password: 'admin1' },
    { username: 'admin2', password: 'admin2' },
    { username: 'admin3', password: 'admin3' },
    { username: 'admin4', password: 'admin4' },
    { username: 'admin5', password: 'admin5' }
  ];

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    this.handleSessionOnReload();
  }

  private handleSessionOnReload(): void {
    // If the user is logged in, clear the session data and redirect to login
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigate(['/login']);
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onLogin(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched(); // Show validation errors if the form is invalid
      return;
    }

    const { username, password } = this.loginForm.value;
    const userExists = this.validUsers.some(
      user => user.username === username && user.password === password
    );

    if (userExists) {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/scheduling-form']);
    } else {
      alert('Invalid Username or Password. Please try again!');
    }
  }
}

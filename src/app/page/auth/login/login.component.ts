import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly loginService: LoginService = inject(LoginService)

  // token: string = ''
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    // this.loginService.getToken().subscribe((d: any) => {
    //   this.token = d.token
    // })
  }

  onSubmit() {
    this.loginService.login({
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    }).subscribe((d) => {
      console.log(d)
    })
  }
}

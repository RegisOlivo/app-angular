import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //Atalho para obter controles (campos) do formulário
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("Login")

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        console.log(data)
        localStorage.setItem("token", data);
      },
      error => {
        console.log("Deu erro: " + error)
      }
    )
  }

}

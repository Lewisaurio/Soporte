import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation = 'login';
  email: string = null;
  password: string = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.LoginWithEmail(this.email, this. password).then((data) => {
      alert('Inicio de sesion exitoso');
      console.log(data);
    }).catch((err) => {
      alert('Ocurrio un error durante el inicio de sesion');
      console.log(err);
    });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this. password).then((data) => {
      alert('Registron exitoso');
      console.log(data);
    }).catch((err) => {
      alert('Ocurrio un error durante el registro');
      console.log(err);
    });
  }

}

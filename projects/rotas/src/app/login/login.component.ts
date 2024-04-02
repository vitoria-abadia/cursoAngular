import { Component, OnInit } from '@angular/core';
import { AuthService } from './Auth.service';
import { Usuario } from './usuario';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  usuario: Usuario = new Usuario(); 

  constructor(private authService: AuthService) { }

  fazerLogin() { 
    this.authService.fazerLogin(this.usuario);
  }

  ngOnInit(): void {
   
  }

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './login/Auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cursoAngular';

  mostrarMenu: boolean = false;

constructor(private authService: AuthService) { 

}

 ngOnInit(): void {
  this.authService.mostrarMenuEmitter.subscribe(
    monstar => this.mostrarMenu = monstar
  );
 }
}

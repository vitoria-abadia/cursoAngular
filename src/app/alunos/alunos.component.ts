import { Component } from '@angular/core';
import { AlunosService } from './alunos.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

  alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
    
  }
}

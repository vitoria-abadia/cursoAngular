import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.css'
})
export class FormDebugComponent {

  @Input() form:any;
}

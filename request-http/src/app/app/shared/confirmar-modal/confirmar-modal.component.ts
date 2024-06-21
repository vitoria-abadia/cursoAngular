import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmar-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './confirmar-modal.component.html',
  styleUrl: './confirmar-modal.component.css',
})
export class ConfirmarModalComponent {

  @Input() title!: string;
  @Input() msg!: string;
  @Input() cancelTxt!: 'Cancelar'; 
  @Input() okTxt = 'Sim';

  constructor(private bsModalRef: BsModalRef) { }

  onClose() {
    this.bsModalRef.hide();
  }

  onConfirm() { 
    
  }

}

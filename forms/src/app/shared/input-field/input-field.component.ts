import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = { 
  provide: NG_VALUE_ACCESSOR, 
  useExisting: forwardRef(() => InputFieldComponent), 
  multi: true
};

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ErrorMsgComponent, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {
 
  private innerValue: any;

  getValue() { 
    return this.innerValue;
  }

  set value(v: any) { 
    if(v !== this.innerValue) { 
      this.innerValue = v;
    }
  }

  @Input() classeCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() control!: any;
  @Input() isReadOnly: any;
  @Input() placeholder!: string;

  constructor() { }

  onChangeCb: (_: any) => void = () => {}
  onTouchedCb: (_: any) => void = () => {}

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
   this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   this.isReadOnly = isDisabled;
  }
}

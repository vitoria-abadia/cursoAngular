
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class FormValidations {
    static requiredMinCheckbox(min = 1): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        if (!(control instanceof FormArray)) {
          return null;
        }
        const formArray = control as FormArray;
        const totalChecked = formArray.controls
          .map(control => control.value)
          .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? null : { required: true };
      };
    }

    static cepValidator(control: FormControl) { 
        const cep = control.value; 
        if(cep && cep!== '') { 
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido : true };
        }
        return null;
    }

    static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {
          if (otherField == null) {
            throw new Error('É necessário informar um campo.');
          }
    
          if (!formControl.root || !(<FormGroup>formControl.root).controls) {
            return null;
          }
    
          const field = (<FormGroup>formControl.root).get(otherField);
    
          if (!field) {
            throw new Error('É necessário informar um campo válido.');
          }
    
          if (field.value !== formControl.value) {
            return { equalsTo : otherField };
          }
    
          return null;
        };
        return validator;
      }

      static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        
        const config : any = {
          'required': `${fieldName} é obrigatório.`,
          'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
          'cepInvalido': 'CEP inválido.',
          'emailInvalido': 'Email já cadastrado!',
          'equalsTo': 'Campos não são iguais',
          'pattern': 'Campo inválido'
        };
        return config[validatorName];
      }
}

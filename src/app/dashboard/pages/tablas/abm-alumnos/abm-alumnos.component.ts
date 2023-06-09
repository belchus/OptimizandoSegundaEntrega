import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  promedioControl = new FormControl('', [Validators.required]);
  avatarControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email:this.emailControl,
    promedio: this.promedioControl,
    avatar:this.avatarControl,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}


 save(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
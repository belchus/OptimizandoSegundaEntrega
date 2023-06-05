import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "src/app/auth/services/auth.service";
import { InscripcionesDialogComponent } from "./inscripciones-dialog.component";
import { Store } from "@ngrx/store";


describe('Pruebas del    InscripcionesDialogComponent',()=>{
 let component:  InscripcionesDialogComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [
           InscripcionesDialogComponent
          ],
          imports:[
            HttpClientModule,
            RouterTestingModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            PipesModule,
            BrowserAnimationsModule
          ],
          providers:[
            {
                provide: AuthService,
                useClass:Store
            }
          ]
          
        }).compileComponents();
        const fixture =TestBed.createComponent( InscripcionesDialogComponent);
        component = fixture.componentInstance
        fixture.detectChanges();
      });
      it ('Si el campo para seleccionar el alumno esta vacio el FormControl del mismo deberia ser invalido',()=>{ 
        component.incripcionForm.setValue({alumnoId:null,cursoId:null})
        expect(component.subjectIdControl.invalid).toBeTrue();
    });
    it ('Si el campo para seleccionar el curso esta vacio el FormControl del mismo deberia ser invalido',()=>{ 
        component.incripcionForm.setValue({alumnoId:null,cursoId:null})
        expect(component.courseIdControl.invalid).toBeTrue();
    });
    it ('Si el InscriptionForm es invalido,tiene que marcar todos los controles tocuhed',()=>{ 
        component.incripcionForm.setValue({alumnoId:null,cursoId:null})
        const spyOnMarkAllAsTouched=spyOn(component.incripcionForm,'markAllAsTouched');
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    });
    });
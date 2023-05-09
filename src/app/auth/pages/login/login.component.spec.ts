import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "../../services/auth.service";
import { AuthServiceMock } from "../../mocks/auth-service.mock";


describe('Pruebas del LoginComponent',()=>{
 let component:LoginComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [
            LoginComponent
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
                useClass:AuthServiceMock
            }
          ]
          
        }).compileComponents();
        const fixture =TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance
        fixture.detectChanges();
      });
      it ('Si el campo email esta vacio el FormControl del mismo deberia ser invalido',()=>{ 
        component.loginForm.setValue({email:null,password:null})
        expect(component.emailControl.invalid).toBeTrue();
    });
    it ('Si el campo password esta vacio el FormControl del mismo deberia ser invalido',()=>{ 
        component.loginForm.setValue({email:null,password:null})
        expect(component.passwordControl.invalid).toBeTrue();
    });
    it ('Si el LoginForm es invalido,tiene que marcar todos los controles tocuhed',()=>{ 
        component.loginForm.setValue({email:null,password:null})
        const spyOnMarkAllAsTouched=spyOn(component.loginForm,'markAllAsTouched');
        component.onSubmit();
    
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    });
    it('Si el loginForm es valido, tiene que llamar al metodo login de mi AuthService', () => {
        component.loginForm.setValue({ email: 'mytest@mail.com', password: '1234' });
        const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService), 'login');
        component.onSubmit();
        expect(component.loginForm.valid).toBeTrue();
        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
      });
    });
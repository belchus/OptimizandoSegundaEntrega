import { LoginFormValue } from "../services/auth.service";

export class AuthServiceMock{
    login(formValue:LoginFormValue):void{
        console.log('login de mock utilizado')
    }
}
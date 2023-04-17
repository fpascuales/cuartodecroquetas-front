import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm?: FormGroup;
  public formError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService    
  ){
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  public login () {        
    if(this.loginForm?.valid) {        
      this.authService.login(this.loginForm.value).subscribe({
        next: () => this.loginForm?.reset(),
        error: (err) => {
          this.formError = err.error;
        }
      })    
    }
  }  
}
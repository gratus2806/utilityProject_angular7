import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import {AlertService} from "../service/alert.service";
import {AuthenticationService} from "../service/authentication.service";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  userInfo:any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      public userService: UserService,
      public authenticationService: AuthenticationService,
      ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          UserName: ['', Validators.required],
          Password: ['', Validators.required]
      });
      // reset login status
      this.authenticationService.logout();
  }

  // convenience getter for easy access to form fields
//   get f() { 
//       return this.loginForm.controls; }

  onSubmit() {
    console.log("onSubmit")
    this.userInfo = {
        username: this.loginForm.controls.UserName.value,
        password: this.loginForm.controls.Password.value
    }
    console.log("userInfo",this.userInfo)
    this.authenticationService.login(this.userInfo).subscribe(data => {
      console.log(data['authenticationDetails'][0].userId)
        if(data['status']==true){
            localStorage.setItem('loginStatus', '1');
            localStorage.setItem('userId', data['authenticationDetails'][0].userId);
            this.router.navigate([environment.successURL]);
        } else{
            this.router.navigate([environment.returnURL]);
        }
      })
      
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {User} from '../model/user';
import { UserServiceService } from '../services/user-service.service';
@Component({
    selector: 'ngx-registe',
    templateUrl: './registe.component.html',
    styleUrls: ['./registe.component.scss']
  })
  export class RegisteComponent implements OnInit {
    registerationForm: FormGroup;
    user: User;
    constructor(private fb: FormBuilder,private userService:UserServiceService) { }

    ngOnInit() {
           this.createRegisterationForm();
   }

    createRegisterationForm() {
        this.registerationForm =  this.fb.group({
            userName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(3)]],
            confirmPassword: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.maxLength(12)]]
        }, {validators: this.passwordMatchingValidatior});
    }

    passwordMatchingValidatior(fg: FormGroup): Validators {
        return fg.get('password').value === fg.get('confirmPassword').value ? null :
            {notmatched: true};
    }


    onSubmit() {
        console.log(this.registerationForm.value);
        //this.user=Object.assign(this.user,this.registerationForm.value);
        this.userService.kullaniciEkle(this.userData());
        
        //localStorage.setItem('Users',JSON.stringify(this.user));
        
    }
    userData():User{
        return this.user ={
            userName:this.userName.value,
            email:this.email.value,
            password:this.password.value,
            mobile:this.mobile.value,
        }
    }
    //add for more than one user
    //service method,servis methoda eklemeyi unutma! /eklendi
    

    onReset() {
        this.registerationForm.reset();
    }


  

    // ------------------------------------
    // Getter methods for all form controls
    // ------------------------------------
    get userName() {
        return this.registerationForm.get('userName') as FormControl;
    }

    get email() {
        return this.registerationForm.get('email') as FormControl;
    }
    get password() {
        return this.registerationForm.get('password') as FormControl;
    }
    get confirmPassword() {
        return this.registerationForm.get('confirmPassword') as FormControl;
    }
    get mobile() {
        return this.registerationForm.get('mobile') as FormControl;
    }
    // ------------------------
}

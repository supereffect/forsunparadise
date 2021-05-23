import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl, NgForm} from '@angular/forms';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable'; 
import {Router,RouterModule, Routes} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {PagesRoutingModule} from '../../pages-routing.module'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService,
    private router: Router){}
  ngOnInit(): void {
    
    localStorage.setItem("token","false");
  }
  
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if(user){
      
      alert("giriş başarılı");
      localStorage.setItem("token","true");
      this.router.navigateByUrl('/pages/warning');
      
    }
    else{
      alert("Hatalı Kullanıcı Adı veya");
      
      localStorage.setItem("token","false");
    }

  }
}

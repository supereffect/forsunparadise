import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../customer.model';
import {CustomerService} from '../../../customer.service';



import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-bul',
  templateUrl: './bul.component.html',
  styleUrls: ['./bul.component.scss']
})
export class BulComponent{

  SaveUser(form:NgForm)
  {

  }
  users:CustomerModel[]=[];

  
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.GetUsers().subscribe((response)=>
    {
      console.log(response);
    })
  }
}

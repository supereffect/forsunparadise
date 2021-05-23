import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
  
})

export class TestComponent implements OnInit {

  constructor() { }
  
 number: number = 0;
  veri!:any;
  cvname: string = '';
  
  myform!:any;
  ngOnInit(): void {
    this.veri= localStorage.getItem("Users");
    console.log(JSON.stringify(this.veri));
    this.myform= new FormGroup({
      ozgecmis: new FormControl(''),
      adsoyad: new FormControl(''),
      
      telefon: new FormControl(''),

      mail: new FormControl(''),
      ozet: new FormControl(''),
      deneyim: new FormControl(''),
      egitim: new FormControl(''),
      yabancidil: new FormControl(''),
      bilgisayar: new FormControl(''),
      yetenekler: new FormControl(''),
      projeler: new FormControl(''),
      lorem: new FormControl(''),

    });
    
    this.goster();
  
  }
  goster(){
    this.veri=localStorage.getItem('formdata');

  }
  
  onSubmit(){
    
    }
    btnclick(){
      this.number++;
      if(this.number<5){

        localStorage.setItem("test"+this.number,JSON.stringify(this.myform.value));
        this.veri=localStorage.getItem('formdata');
        alert(this.number+" Numaralı özgeçmişiniz başarıyla yüklendi");

      }
      else{
        alert("5 taneden fazla özgeçmiş yükleyemezsniz");
      }
      
          
    }

}

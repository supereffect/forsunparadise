import { Component, OnInit,ViewChild } from '@angular/core';
import { jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';

@Component({
  selector: 'ngx-gauge1',
  templateUrl: './gauge1.component.html',
  styleUrls: ['./gauge1.component.scss']
})
export class Gauge1Component{
  @ViewChild('myGauge', { static: false })
  myGauge!: jqxGaugeComponent;
  
  @ViewChild('myGauge2', { static: false })
  myGauge2!: jqxGaugeComponent;
  @ViewChild('myGauge3', { static: false })
  myGauge3!: jqxGaugeComponent;
  @ViewChild('myGauge4', { static: false })
  myGauge4!: jqxGaugeComponent;
  name: string="testestest"
  
  ticksMinor: any = { interval: 5, size: '5%' };
  ticksMajor: any = { interval: 10, size: '10%' };
  labels: any = { visible: true, position: 'inside' };
  style: any = { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' };
  caption: any = { offset: [0, -25], value: 'jQWidgets', position: 'bottom' };
  ranges: any[] =
  [
      { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
      { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
      { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
      { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
  ];
  number='';
  values = '';

  testingen=this.number;
  textAreaValueToGauge(){
      return 15;
      if(this.values==''){
          alert(this.values);
          return 0;
      
      }
      else{

          alert(this.values);
          return this.values;
      }
  }
  textInput(event: any)
  {
     this.number = event.target.value;   
     var x =Number(this.number);
     this.myGauge.value(x);
  
    
      }

      textInput2(event: any)
  {
     this.number = event.target.value;   
     var x =Number(this.number);
    
     this.myGauge2.value(x);
     
    
      }textInput3(event: any)
      {
         this.number = event.target.value;   
         var x =Number(this.number);
      
         this.myGauge3.value(x);
         
  
          }textInput4(event: any)
          {
             this.number = event.target.value;   
             var x =Number(this.number);
          
             
             this.myGauge4.value(x);
      
              }
  test(){

      
       //alert(this.values);
  
      var x=Number(this.number);
  
      console.log(x)
      return x;
  }
  /*showLabelsCheckboxOnChange(event: any): void {
      if (this.myGauge) {
          this.labels.visible = event.args.checked;
          this.myGauge.labels(this.labels);
      }
  }
  showRangesCheckboxOnChange(event: any): void {
      if (this.myGauge) {
          this.myGauge.showRanges(true);
      }
  }
  showBorderCheckboxOnChange(event: any): void {
      if (this.myGauge) {
          this.myGauge.border({ visible: true });
      }
  }
  insideRadioOnChange(event: any): void {
      if (this.myGauge) {
          if (event.args.checked) {
              this.labels.position = 'inside';
              this.myGauge.labels(this.labels);
          }
      }
  }
  outsideRadioOnChange(event: any): void {
      if (this.myGauge) {
          if (event.args.checked) {
              this.labels.position = 'outside';
              this.myGauge.labels(this.labels);
          }
      }
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}

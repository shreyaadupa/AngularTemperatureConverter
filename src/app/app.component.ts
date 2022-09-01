import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Temperature Converter";
  c: any;
  f: any;

  ngOnInit() {}

  ctof(value: any,type: any)
  {
      if(type==='c')
      {
        let fah  = value*(9/5)+32; //C*9/5 + 32
        this.f = fah.toFixed(1);
      }
      else if(type==='f')
      {
        let cel = (value-32) * (5/9); //(F-32) * 5/9
        this.c = cel.toFixed(1);
      }
      else{
        this.c=null;
        this.f=null;
      }

  }

}

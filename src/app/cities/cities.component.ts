import { Component } from '@angular/core';
import { max, min } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  exp:city[]=[];
  fresh:city[]=[];
  

  data: city[]=[
    {  name :"Ramesh",technology :"Java",city :"Pune",experience : 5 },
                {  name:"Ram",technology:"Angualr",city:"Mumbai",experience:3 },
                {  name:"Raj",technology:"React",city:"Banglore",experience:2 },
                {  name:"Smith",technology:"Java",city:"Pune",experience:5 },
                {  name:"John",technology:"Java",city:"Hyderabad",experience:0 },
                {  name:"Sita",technology:"React",city:"Chennai",experience:1 },
                {  name:"Arun",technology:"Angular",city:"Hyderabad",experience:4 },
                {  name:"Krish",technology:"React",city:"Chennai",experience:5 },
                {  name:"Teja",technology:"Java",city:"Pune",experience:0 },

    
  ];
  names=this.data.filter((data)=>data.city==="Pune");
  source=from(this.data);
  finalexp=this.source.pipe(max(x=>x.experience)).subscribe(x=>this.exp.push(x));
  finalfresh=this.source.pipe(min(x=>x.experience)).subscribe(x=>this.fresh.push(x));
  exper=this.source.pipe(min(x=>x.experience)).subscribe(x=>x.experience);
  
  
  
 


  


}

export interface city{
  name: string;
  technology: string;
  city: string;
  experience:number;
}

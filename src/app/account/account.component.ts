import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './account.model';
import { AccountService } from './account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  name:string="";
    mail:string="";
    password:string="";
    confirm:string="";
    lists!:Account[];
    constructor(private service:AccountService,private router:Router){}
    add(formValue:any){
      if(formValue.password==formValue.confirm){
        this.service.add(formValue).subscribe(
         (results:any)=>{
          //console.log(results)
          if(results=="mail id already exists"){
            window.alert("mail id already exists")
          }
          else{
          this.router.navigate(['/login'])
          }}
        
          )
        
     }
    
    else{
       window.alert("check whether the passwords match")
    }
}
}

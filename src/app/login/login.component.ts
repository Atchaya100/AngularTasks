
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';
  mail:string="";
  password:string="";
  name:string="";

  constructor(private service:LoginService,private router:Router){}
 login(formValue:any){
    this.mail=formValue.mail
    this.password=formValue.password
    this.service.login(this.mail,this.password).subscribe(
        (data:any)=>{
         // console.log(data)
            if(data=="wrong password"){
                window.alert("wrong password")
            }
            if(data=="wrong mailid"){
              window.alert("wrong mailid")
          }
           
          if(data!="wrong password" && data!= "wrong mailid"){
          localStorage.setItem('id',data.authData.id)
          localStorage.setItem('name',data.authData.name)
          localStorage.setItem('mail',data.authData.mail)
          localStorage.setItem('token',data.token) 
          this.router.navigate(['tasks']);
          }
           }
           
      
   );

}
}
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name!:string
  id=0
  mail!:string
  password!:string
  confirm!:string
  constructor(private route: ActivatedRoute,private router: Router,private service:AccountService){}
  ngOnInit(){
   
    this.name=String(localStorage.getItem('name') || null)
    this.mail=String(localStorage.getItem('mail') || null)
    this.id=Number(localStorage.getItem('id') || null)
  }
  update(formValue:any){
    if(formValue.password==formValue.confirm){
    this.service.update(formValue,this.id).subscribe(
      (data:any)=>{
      
        this.router.navigate(['/tasks']);
      }
    )}
    else{
      window.alert("check whether passwords match")
    }
  }
  delete(){
    const a=window.confirm("Do you want to delete")
    if(a==true){
    this.service.delete(this.id).subscribe(
      (data:any)=>{
        console.log("delete")
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem("mail")
        localStorage.removeItem("name")
        this.router.navigate(['/'])
      }
    )}
    else{
      
    }
  }
}

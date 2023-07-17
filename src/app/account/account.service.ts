import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Account } from "./account.model";

@Injectable({
    providedIn: 'root'
  })
  export class AccountService{
 private AccountUrl="http://localhost:8091/api";
 // private AccountUrl="https://tasks-oape.onrender.com/api";
   auth_token = localStorage.getItem('token');
    private httpOptions={
    
        headers: new HttpHeaders({
           
            'Content-Type':'application/json',
            'Authorization': `Bearer ${this.auth_token}`
        })
    }

   
    constructor(private _http: HttpClient){}
    token(){
        const url=`${this.AccountUrl}`
        return this._http.get(url,this.httpOptions)
    }
    add(formValue:any){
        let acc:Account={
            id: 0,
            name:formValue.name,
            mail: formValue.mail,
            password: formValue.password,
            confirm: formValue.confirm,
            
        }
        const url=`${this.AccountUrl}/createAccount`
        return this._http.post(url,acc,this.httpOptions)
}
update(formValue:any,uid:number){
    
    let acc:Account={
        id: Number(localStorage.getItem("id")||null),
        name:String(localStorage.getItem("name")||null),
        mail: String(localStorage.getItem("mail")||null),
        password: formValue.password,
        confirm: formValue.confirm
        
    }
    //console.log(acc)
    const url=`${this.AccountUrl}/update/${uid}`
    return this._http.put(url,acc,this.httpOptions)

}
delete(uid:number){
    const url=`${this.AccountUrl}/delete/${uid}`
    return this._http.delete(url,this.httpOptions)
}

  }
  
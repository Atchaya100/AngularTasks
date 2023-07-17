import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService{
 private loginUrl="http://localhost:8091/api";
 //private loginUrl="https://tasks-oape.onrender.com/api";
 auth_token = localStorage.getItem('token');
 private httpOptions={
 
     headers: new HttpHeaders({
        
         'Content-Type':'application/json',
         'Authorization': `Bearer ${this.auth_token}`
     })
 }

     id=0;

constructor(private _http: HttpClient){}
login(mail:string,password:string){

    const l=`${this.loginUrl}/login`;
    let p={
        mail:mail,
        password:password
    }
    return this._http.post(l,p,this.httpOptions);
    
   
}
find(id: any){
    const l=`${this.loginUrl}/find/${id}`;
    return this._http.get(l,this.httpOptions);
}
view(id:any){
    const l=`${this.loginUrl}/view/${id}`;
    return this._http.get(l,this.httpOptions);
}
}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class ApiService{

    constructor(private httpClient:HttpClient){

    }

    url="http://localhost:8080"
    getData(){
        this.httpClient.get(this.url).subscribe((data)=>{
            console.log(data)
        })
    }

    registerUser(data:any){
        this.httpClient.post(this.url+"/adduser",data).subscribe({
            next(res){
              console.log(res)  
            }
        })
    }
    deleteUser(data:any){
        this.httpClient.delete(this.url+"/deleteuser",{
            params : new HttpParams().set("email",data.email)
        }).subscribe({
            next(res){
                console.log(res)
            }
        })
    }
    // deleteUser(data:any){
    //     console.log(data)
    //     this.httpClient.delete(this.url+"/deleteuser",data).subscribe({
    //         next(res){
    //             console.log(res)
    //         }
    //     })
    // }

}

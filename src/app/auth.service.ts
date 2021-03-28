import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="https://bahia2.mblearn.com/api/stores/1/nexo/getItems?ordesta_api=sUTNYTvW36Wof2BeAaGf9gvut5JXShwKpdSIseCf&request=getitems"

  constructor(public _HttpClient:HttpClient) { }

  data():Observable<any>
  {
  return this._HttpClient.get(this.baseUrl)
  
  }
}

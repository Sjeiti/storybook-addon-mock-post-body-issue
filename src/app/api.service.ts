import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

const baseUri = 'http://localhost:3000/'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(baseUri + 'get/' + this.getMillisQueryParam())
  }

  postData(value:string) {
    return this.http.post<any>(baseUri + 'post/' + this.getMillisQueryParam(), {value})
  }

  private getMillisQueryParam(){
    return `?millis=${Date.now()}`
  }
}

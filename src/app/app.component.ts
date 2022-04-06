import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from './api.service'

const empty = '-'

@Component({
  selector: 'app-root',
  template: `<div>
    <fieldset>
      <legend>call service</legend>
      <table>
        <thead>
            <tr><th>call</th><th>pending</th><th>request</th><th>response</th></tr>
        </thead>
        <tbody>
            <tr><td><button (click)="onClickGet()">GET</button></td><td>{{pendingGet}}</td><td></td><td><span>{{responseGet}}</span></td></tr>
            <tr>
              <td><button (click)="onClickPost()">POST</button></td>
              <td>{{pendingPost}}</td>
              <td><input #input /></td>
              <td><span>{{responsePost}}</span></td></tr>
        </tbody>
      </table>
    </fieldset>
</div>`
})
export class AppComponent {

  pendingGet = false
  pendingPost = false

  responseGet = empty
  responsePost = empty

  @ViewChild('input', {static: true}) inputElement: ElementRef

  constructor(
    private apiService:ApiService,
    inputElement: ElementRef
  ) {
    this.inputElement = inputElement
  }

  onClickGet(){
    this.responseGet = empty
    this.pendingGet = true
    this.apiService.getData()
      .subscribe((data: any) => {
        this.responseGet = JSON.stringify(data)
        this.pendingGet = false
      })
  }

  onClickPost(){
    this.responsePost = empty
    this.pendingPost = true

    const requestValue = this.inputElement.nativeElement.value

    this.apiService.postData(requestValue)
      .subscribe((data: any) => {
        this.responsePost = JSON.stringify(data)
        this.pendingPost = false
      })
  }
}

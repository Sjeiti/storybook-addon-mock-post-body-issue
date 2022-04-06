import {AppComponent} from './app.component'
import {moduleMetadata} from '@storybook/angular'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {ApiService} from './api.service'

export default {
  title: 'App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [ApiService]
    })
  ]
}

export const App = ()=>({
  component: AppComponent,
  template: '<app-root></app-root>',
  props: {
    uriPrevious: '?path=/story/balance',
    uriSuccess: '?path=/story/balance'
  }
})

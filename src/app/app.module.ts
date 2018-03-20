import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core'
import { isPlatformBrowser } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BsNavComponent } from './bs-nav/bs-nav.component'

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, BsNavComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-universal-seo' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server'
    console.log(`Running ${platform} with appId=${appId}`)
  }
}

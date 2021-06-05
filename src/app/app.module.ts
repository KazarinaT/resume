import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { LearningComponent } from './learning/learning.component';
import { CertifComponent } from './certif/certif.component';
import { MyworkComponent } from './mywork/mywork.component';
import { HTMLTutorialComponent } from './html-tutorial/html-tutorial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ExperienceComponent,
    LearningComponent,
    CertifComponent,
    MyworkComponent,
    HTMLTutorialComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // RouterModule.forRoot([
    //   {path: '', component: MyworkComponent},
    //   {path: 'html-tutorial', component: HTMLTutorialComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

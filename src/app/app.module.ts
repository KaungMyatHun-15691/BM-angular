import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StepTwoComponent } from './step-one/step-two/step-two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReusableComponent } from './reusable/reusable.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { SizerComponent } from './sizer/sizer.component';


const routes : Routes =[
  {path: '' , component:HomePageComponent},
  {path: 'st-one', component: StepOneComponent},
  {
    path: 'pages',
    loadChildren: ()=> import('./pages/pages.module').then(m=> m.PageModule)
  },
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    PageNotFoundComponent,
    HomePageComponent,
    StepTwoComponent,
    SizerComponent,

  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

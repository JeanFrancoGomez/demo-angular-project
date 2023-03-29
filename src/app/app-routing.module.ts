import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./components/test/test.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {DogComponent} from "./components/dog/dog.component";
import {DogDetailComponent} from "./components/dog-detail/dog-detail.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '' , pathMatch:'full', component: HomeComponent},
  { path: 'dog' , component: DogComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard], children: [
      { path: ':id' , component: DogDetailComponent},
    ]},
  { path: 'about' , component: AboutComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'test' , component: TestComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**' , redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

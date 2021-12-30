import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // tambien para quitar algo de la rutas de angular
  exports: [RouterModule]
})
export class AppRoutingModule { }

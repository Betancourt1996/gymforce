import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/page/home/home.component';
import { NoticiasComponent } from './componentes/page/noticias/noticias.component';
import { PostDetalleComponent } from './componentes/page/shared/post/post-detalle/post-detalle.component';
import { ContactoComponent } from './componentes/page/contacto/contacto.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:id', component: PostDetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }

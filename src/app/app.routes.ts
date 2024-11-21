import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/page/home/home.component';
import { NoticiasComponent } from './componentes/page/noticias/noticias.component';
import { PostDetalleComponent } from './componentes/page/shared/post/post-detalle/post-detalle.component';
import { ContactoComponent } from './componentes/page/contacto/contacto.component';
import { SedeComponent } from './componentes/page/sede/sede.component';
import { MembresiaComponent } from './componentes/page/membresia/membresia.component';
import { BeneficiosComponent } from './componentes/page/beneficios/beneficios.component';
import { LoginComponent } from './componentes/page/login/login.component';
import { RegisterComponent } from './componentes/page/register/register.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PerfilComponent } from './componentes/page/perfil/perfil.component';
import { AuthGuard } from 'app/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'noticias/:id', component: PostDetalleComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'sede', component: SedeComponent },
      { path: 'membresias', component: MembresiaComponent },
      { path: 'beneficios', component: BeneficiosComponent },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }, 
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }

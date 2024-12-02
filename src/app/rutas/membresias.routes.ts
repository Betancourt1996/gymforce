import { Routes } from '@angular/router';
import { ConfirmacionMembresiaComponent } from 'app/componentes/page/membresia/confirmacion-membresia/confirmacion-membresia.component';
import { GymnasioMembresiaComponent } from 'app/componentes/page/membresia/gymnasio-membresia/gymnasio-membresia.component';
import { MembresiaComponent } from 'app/componentes/page/membresia/membresia.component';
import { PagoMembresiaComponent } from 'app/componentes/page/membresia/pago-membresia/pago-membresia.component';
import { PlanesMembresiaComponent } from 'app/componentes/page/membresia/planes-membresia/planes-membresia.component';
import { ResumenMembresiaComponent } from 'app/componentes/page/membresia/resumen-membresia/resumen-membresia.component';
import { MainGuard } from 'app/guards/main.guard';
import { MembresiaGuard } from 'app/guards/membresia.guard';


export const membresiasRoutes: Routes = [
  { 
    path: '',
    component: MembresiaComponent,
    children:[
      { path: '', redirectTo: 'gymnasio', pathMatch: 'full' },
      { path: 'gymnasio', component: GymnasioMembresiaComponent },
      { path: 'planes', component: PlanesMembresiaComponent, canActivate: [MembresiaGuard]  },
      { path: 'pagos', component: PagoMembresiaComponent, canActivate: [MembresiaGuard]  },
      { path: 'resumen', component: ResumenMembresiaComponent, canActivate: [MembresiaGuard]  },
      { path: 'confirmacion', component: ConfirmacionMembresiaComponent, canActivate: [MembresiaGuard]  },
    ]
  },
];
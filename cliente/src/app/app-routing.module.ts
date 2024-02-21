import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { CreditoComponent } from './components/credito/credito.component';
import { DebitoComponent } from './components/debito/debito.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegistroAdminComponent } from './components/registro-admin/registro-admin.component';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeclienteComponent } from './components/homecliente/homecliente.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { VentaComponent } from './components/venta/venta.component';
import { FacturaComponent } from './components/factura/factura.component';
import { VentausuarioComponent } from './components/ventausuario/ventausuario.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/principal",
    pathMatch: "full"
  },
  {
    path: 'recuperar/:token',
    component: RecuperarComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'home',
    component: HomeComponent,
    children : [
      {
          path:'vehiculo',
          component: VehiculoComponent,
      },
      {
          path:'usuarios',
          component: UsuariosComponent,
      },
      {
          path:'venta',
          component: VentaComponent,
      },
      {
          path:'ventausuario',
          component: VentausuarioComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      }
  ]
  }, {
    path: 'homecliente',
    component: HomeclienteComponent,
    children : [
      {
          path:'categoria',
          component: CategoriaComponent,
      },
      {
          path:'carrito',
          component: CarritoComponent,
      },
      {
        path: 'credito',
        component: CreditoComponent,
      },
      {
        path: 'debito',
        component: DebitoComponent,
      }
      ,
      {
        path: 'transferencia',
        component: TransferenciaComponent,
      },
      {
        path: 'factura',
        component: FacturaComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      }
  ]
  },{
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'loginadmin',
    component: LoginAdminComponent,
  },
  {
    path: 'registroadmin',
    component: RegistroAdminComponent,
  },
  {
    path: 'encargado',
    component: EncargadoComponent,
  },
  {
    path: 'empleado',
    component: EmpleadoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

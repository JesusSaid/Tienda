import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CreditoComponent } from './components/credito/credito.component';
import { DebitoComponent } from './components/debito/debito.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { RegistroAdminComponent } from './components/registro-admin/registro-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeclienteComponent } from './components/homecliente/homecliente.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { VentaComponent } from './components/venta/venta.component';
import { FacturaComponent } from './components/factura/factura.component';
import { VentausuarioComponent } from './components/ventausuario/ventausuario.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncargadoComponent,
    PrincipalComponent,
    RegistroComponent,
    VehiculoComponent,
    CarritoComponent,
    CreditoComponent,
    DebitoComponent,
    EmpleadoComponent,
    LoginAdminComponent,
    RegistroAdminComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    UsuariosComponent,
    HomeclienteComponent,
    CategoriaComponent,
    TransferenciaComponent,
    VentaComponent,
    FacturaComponent,
    VentausuarioComponent,
    RecuperarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

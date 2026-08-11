import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:username',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'startpage',
    pathMatch: 'full'
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then(m => m.TEST1PageModule)
  },
  {
    path: 'malla-curricular',
    loadChildren: () => import('./malla-curricular/malla-curricular.module').then(m => m.MallaCurricularPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'comunicados',
    loadChildren: () => import('./comunicados/comunicados.module').then( m => m.ComunicadosPageModule)
  },
  {
    path: 'startpage',
    loadChildren: () => import('./startpage/startpage.module').then( m => m.StartpagePageModule)
  },
  {
    path: 'cargandopage/:username',
    loadChildren: () => import('./cargandopage/cargandopage.module').then( m => m.CargandopagePageModule)
  },
  {
    path: 'perfil/:username',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'olvidastecontrasenia',
    loadChildren: () => import('./olvidastecontrasenia/olvidastecontrasenia.module').then( m => m.OlvidastecontraseniaPageModule)
  },
  {
    path: 'anotaciones',
    loadChildren: () => import('./anotaciones/anotaciones.module').then( m => m.AnotacionesPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


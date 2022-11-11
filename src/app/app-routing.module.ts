import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'summercollection',
    loadChildren: () => import('./summercollection/summercollection.module').then( m => m.SummercollectionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  
  
  {
    path: 'rinoneras',
    loadChildren: () => import('./rinoneras/rinoneras.module').then( m => m.RinonerasPageModule)
  },
  {
    path: 'mochilas',
    loadChildren: () => import('./mochilas/mochilas.module').then( m => m.MochilasPageModule)
  },
  {
    path: 'bolsos',
    loadChildren: () => import('./bolsos/bolsos.module').then( m => m.BolsosPageModule)
  },
  {
    path: 'bandoleras',
    loadChildren: () => import('./bandoleras/bandoleras.module').then( m => m.BandolerasPageModule)
  },
  {
    path: 'materas',
    loadChildren: () => import('./materas/materas.module').then( m => m.MaterasPageModule)
  },
  {
    path: 'billeteras',
    loadChildren: () => import('./billeteras/billeteras.module').then( m => m.BilleterasPageModule)
  },
  {
    path: 'todas-categorias',
    loadChildren: () => import('./todas-categorias/todas-categorias.module').then( m => m.TodasCategoriasPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

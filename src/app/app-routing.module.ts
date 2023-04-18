import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroquetasDataResolver } from './core/resolvers/croquetas-data/croquetas-data.resolver';
import { OrdersLastResolver } from './core/resolvers/orders-last/orders-last.resolver';
import { PaymentGuard } from './core/guards/payment/payment.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { OrdersLastTenResolver } from './core/resolvers/orders-last-ten/orders-last-ten.resolver';
import { TopCroquetasDataResolver } from './core/resolvers/top-croquetas-data/top-croquetas-data.resolver';
import { OrdersDataResolver } from './core/resolvers/orders-data/orders-data.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'croqueta-detail/:id',
    loadChildren: () => import('./pages/croqueta-detail/croqueta-detail.module').then(m => m.CroquetaDetailModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule),
    resolve: {
      lastOrder: OrdersLastResolver
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    resolve: {
      croquetaData: CroquetasDataResolver
    }
  },
  {
    path: 'admin',
    redirectTo: 'admin/login',
    pathMatch: 'full'
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./pages/admin/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    resolve: {
      ordersData: OrdersLastTenResolver,
      topCroquetaData: TopCroquetasDataResolver
    }
  },
  {
    path: 'admin/croqueta-list',
    loadChildren: () => import('./pages/admin/croqueta-list/croqueta-list.module').then(m => m.CroquetaListModule),
    canActivate: [AuthGuard],
    resolve: {
      croquetaData: CroquetasDataResolver
    }
  },
  {
    path: 'admin/croqueta-create',
    loadChildren: () => import('./pages/admin/croqueta-create/croqueta-create.module').then(m => m.CroquetaCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/croqueta-detail/:id',
    loadChildren: () => import('./pages/admin/croqueta-detail/croqueta-detail.module').then(m => m.CroquetaDetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/croqueta-edit/:id',
    loadChildren: () => import('./pages/admin/croqueta-edit/croqueta-edit.module').then(m => m.CroquetaEditModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/order-list',
    loadChildren: () => import('./pages/admin/order-list/order-list.module').then(m => m.OrderListModule),
    canActivate: [AuthGuard],
    resolve: {
      ordersData: OrdersDataResolver
    }
  },
  {
    path: 'admin/order-detail/:id',
    loadChildren: () => import('./pages/admin/order-detail/order-detail.module').then(m => m.OrderDetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./pages/admin/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

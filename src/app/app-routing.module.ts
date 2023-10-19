import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // auth ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: 'sign-in', loadChildren: () => import('./auth/pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./auth/pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'verify-email', loadChildren: () => import('./auth/pages/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },
  // pages ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'error404', loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'denegado', loadChildren: () => import('./pages/denegado/denegado.module').then(m => m.DenegadoModule) },
  { path: 'actoralta', loadChildren: () => import('./pages/actores/actor-alta/actor-alta.module').then(m => m.ActorAltaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

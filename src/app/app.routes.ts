import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"register", component: SignupComponent},
    {path:"login", component: LoginComponent},
    {path:"admin", loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
    {path:"customer", loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)},
];

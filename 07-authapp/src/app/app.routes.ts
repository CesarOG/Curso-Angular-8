import { RouterModule, Routes } from "@angular/router";

import { PreciosComponent } from "./components/precios/precios.component";
import { ProtegidaComponent } from "./components/protegida/protegida.component";
import { HomeComponent } from "./components/home/home.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "precios", component: PreciosComponent },
  {
    path: "protegida",
    component: ProtegidaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "callback",
    component: CallbackComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

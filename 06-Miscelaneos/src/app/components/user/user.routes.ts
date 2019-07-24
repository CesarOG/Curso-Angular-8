import { Routes } from "@angular/router";
import { UserNewComponent } from "./user-new.component";
import { UserEditComponent } from "./user-edit.component";
import { UserDetailComponent } from "./user-detail.component";

export const USUARIO_ROUTES: Routes = [
  { path: "New", component: UserNewComponent },
  { path: "Edit", component: UserEditComponent },
  { path: "Detail", component: UserDetailComponent },
  { path: "**", pathMatch: "full", redirectTo: "Edit" }
];

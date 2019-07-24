import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from "./app.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { CssComponent } from "./components/css/css.component";
import { ClasesComponent } from "./components/clases/clases.component";
import { ResaltadoDirective } from "./directives/resaltado.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { UserNewComponent } from "./components/user/user-new.component";
import { UserEditComponent } from "./components/user/user-edit.component";
import { UserDetailComponent } from "./components/user/user-detail.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DanceMovesComponent } from "./dance-moves/dance-moves.component";
import { DanceMovesListComponent } from "./dance-moves/dance-moves-list/dance-moves-list.component";
import { DanceMovesDetailsComponent } from "./dance-moves/dance-moves-details/dance-moves-details.component";
import { DanceMoveItemComponent } from "./dance-moves/dance-moves-list/dance-move-item/dance-move-item.component";
import { DropdownDirective } from "./dropdown.directive";
import { AppRoutingModule } from "./app-routing.module";
import { DanceMovesStartComponent } from "./dance-moves/dance-moves-start/dance-moves-start.component";
import { DanceMoveEditComponent } from "./dance-moves/dance-move-edit/dance-move-edit.component";
import { DanceMovesService } from "./dance-moves/dance-moves.service";
import { DataStorageService } from "./dance-moves/data-storage.service";
import { DanceMovesResolverService } from "./dance-moves/dance-moves-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { ShortenPipe } from "./shorten.pipe";
import { AuthService } from "./auth/auth.service";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DanceMovesComponent,
    DanceMovesListComponent,
    DanceMovesDetailsComponent,
    DanceMoveItemComponent,
    DropdownDirective,
    DanceMovesStartComponent,
    DanceMoveEditComponent,
    AuthComponent,
    ShortenPipe,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DanceMovesService,
    DataStorageService,
    DanceMovesResolverService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

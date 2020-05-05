import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DanceMovesComponent } from "./dance-moves/dance-moves.component";
import { DanceMovesStartComponent } from "./dance-moves/dance-moves-start/dance-moves-start.component";
import { DanceMovesDetailsComponent } from "./dance-moves/dance-moves-details/dance-moves-details.component";
import { DanceMoveEditComponent } from "./dance-moves/dance-move-edit/dance-move-edit.component";
import { DanceMovesResolverService } from "./dance-moves/dance-moves-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: "", redirectTo: "/dance-moves", pathMatch: "full" },
  {
    path: "dance-moves",
    component: DanceMovesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: DanceMovesStartComponent },
      { path: "new", component: DanceMoveEditComponent },
      {
        path: ":id",
        component: DanceMovesDetailsComponent,
        resolve: [DanceMovesResolverService],
      },
      {
        path: ":id/edit",
        component: DanceMoveEditComponent,
        resolve: [DanceMovesResolverService],
      },
    ],
  },
  {
    path: "auth",
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

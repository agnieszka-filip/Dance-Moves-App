import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanceMovesComponent } from './dance-moves/dance-moves.component';
import { DanceMovesStartComponent } from './dance-moves/dance-moves-start/dance-moves-start.component';
import { DanceMovesDetailsComponent } from './dance-moves/dance-moves-details/dance-moves-details.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dance-moves', pathMatch: 'full' },
    { path: 'dance-moves', component: DanceMovesComponent, children: [
        { path: '', component: DanceMovesStartComponent },
        { path: ':id', component: DanceMovesDetailsComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
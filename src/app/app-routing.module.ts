import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanceMovesComponent } from './dance-moves/dance-moves.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dance-moves', pathMatch: 'full' },
    { path: 'dance-moves', component: DanceMovesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DanceMovesComponent } from './dance-moves/dance-moves.component';
import { DanceMovesListComponent } from './dance-moves/dance-moves-list/dance-moves-list.component';
import { DanceMovesDetailsComponent } from './dance-moves/dance-moves-details/dance-moves-details.component';
import { DanceMoveItemComponent } from './dance-moves/dance-moves-list/dance-move-item/dance-move-item.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DanceMovesComponent,
    DanceMovesListComponent,
    DanceMovesDetailsComponent,
    DanceMoveItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

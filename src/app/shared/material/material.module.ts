import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material'; */

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
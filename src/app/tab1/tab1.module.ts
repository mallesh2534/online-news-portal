import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
;
import { RouterModule, Routes } from '@angular/router';
import{Tab1Page}from'./tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild([{ path: '', component: Tab1Page },
    {
      path: 'tab2',
      children: [
        {
          path: '',
          loadChildren: '../tab2/tab2.module#Tab2PageModule'
        }
      ]
    },
    {
      path: 'tab3',
      children: [
        {
          path: '',
          loadChildren: '../tab3/tab3.module#Tab3PageModule'
        }
      ]
    },])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

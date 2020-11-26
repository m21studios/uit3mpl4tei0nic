import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PopoptionsComponent } from './popoptions/popoptions.component';
import { ModaloptionsComponent } from './modaloptions/modaloptions.component';

@NgModule({
    declarations:[
        SidemenuComponent,
        PopoptionsComponent,
        ModaloptionsComponent
    ],
    exports:[
        SidemenuComponent,
        PopoptionsComponent,
        ModaloptionsComponent
    ],
    imports:[
        CommonModule,
        IonicModule
    ]
})
 
export class ComponentsModule{}
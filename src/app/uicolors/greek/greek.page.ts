import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoptionsComponent } from '../../components/popoptions/popoptions.component';
import { ModaloptionsComponent } from '../../components/modaloptions/modaloptions.component';

@Component({
  selector: 'app-greek',
  templateUrl: './greek.page.html',
  styleUrls: ['./greek.page.scss'],
})
export class GreekPage implements OnInit {

  constructor(public popoverController: PopoverController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaloptionsComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      backdropDismiss: true,
      animated: true,
      showBackdrop: true,
      presentingElement: await this.modalController.getTop() 
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoptionsComponent,
      //cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camerapage',
  templateUrl: './camerapage.page.html',
  styleUrls: ['./camerapage.page.scss'],
})
export class CamerapagePage implements OnInit {

  preview:any;
  active_fab: boolean = true;
  active_gallery: boolean = false;
  public imagelist = [];

  constructor() { }

  ngOnInit() {
    this.preview = '../../../assets/profiles/p2.jpg';

    this.imagelist = [
      {
        id:'1',
        image:'../../../assets/profiles/p17.jpg',
      },
      {
        id:'2',
        image:'../../../assets/profiles/p5.jpg',
      },
      {
        id:'3',
        image:'../../../assets/profiles/p7.jpg',
      },
      {
        id:'4',
        image:'../../../assets/profiles/p11.jpg',
      },
      {
        id:'5',
        image:'../../../assets/profiles/p16.jpg',
      }
    ]

  }

  activegallery(){
    this.active_fab = !this.active_fab;
    this.active_gallery = !this.active_gallery;
  }

}

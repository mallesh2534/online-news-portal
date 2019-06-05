import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public imgdata2
  public shareimage
  public data
  constructor(public api:ApiService,private social:SocialSharing,public modalController: ModalController){

    
  }
  ngOnInit(){

    this.api.getdata2()
    
    .subscribe((success)=>{
      this.imgdata2=success 
    
      console.log('success',this.imgdata2)},
    (fail)=>{
      console.log('fail',fail);
    })
  }
  share(){
    //sharing social network start...
  // Check if sharing via email is supported
// this.social.shareViaWhatsApp().then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });


// Share via whatsApp
this.social.shareViaWhatsApp('share', '', 'https://mathrusriinfotech.com/about-us/.com').then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }
  
}

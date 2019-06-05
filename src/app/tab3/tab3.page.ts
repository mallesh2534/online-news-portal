import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{
  lat:any;
  lang:any;
  public neardata;
  public plots;
  public imgdata;
  public imgdata1;
  closeResult: string;
  constructor(
    // public geo:Geolocation,
    // public google:GoogleNearby,
    public api:ApiService,
    private social:SocialSharing,
    private modalService: NgbModal,
    ) {}
  ngOnInit(){
    this.imgdata=this.api.getdata()
    
    .subscribe((success)=>{
      this.imgdata=success 
      console.log('success',this.imgdata)},
    (fail)=>{
      console.log('fail',fail);
    })
    this.imgdata1=this.api.getdata1()
    
    .subscribe((success)=>{
      this.imgdata1=success 
      console.log('success',this.imgdata1)},
    (fail)=>{
      console.log('fail',fail);
    })
    //end imagdata1
    
  }
  share(){
  
    this.social.shareViaWhatsApp('share', '', 'https://mathrusriinfotech.com/about-us/.com').then(() => {
    
    
    }).catch(() => {
    
    });
    
    }
    face(){
     this.social.shareViaFacebook ('share', '', 'https://mathrusriinfotech.com/about-us/.com').then(() => {
      // Success!
      
      }).catch(() => {
      // Error!
      });
    }
    open(content) {
      this.modalService
        .open(content, { ariaLabelledBy: "modal-basic-title" })
        .result.then(
          result => {
            this.closeResult = `Closed with: ${result}`;
          },
          reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return "by pressing ESC";
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return "by clicking on a backdrop";
      } else {
        return `with: ${reason}`;
      }
    } //for popup we use ng bootstrap end
   
}

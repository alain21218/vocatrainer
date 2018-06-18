import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from '../../shared/services/pdf.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'cs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private pdfSvc:PdfService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  
  ngOnInit() {
    
  }

  slideTo(fragment:string): void {
    try {
      document.querySelector('#' + fragment).scrollIntoView();
    } catch (e) { }
  }

  download() {
    this.pdfSvc.download()
      .then(() => this.toastr.success("PDF généré"))
      .catch(error => (this.toastr.error("Une erreur est survenue pendant la création du PDF"), console.log(error)));
  }

}

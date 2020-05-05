import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMembersComponent } from '../modal-members/modal-members.component';
import { ModalAddEditMembersComponent } from '../modal-members/modal-add-edit-members/modal-add-edit-members.component';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  headers = ['ID', 'First name', 'Last name'];

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  // ----------- method for show modal and show detail in modal ---------------
  onShowDetails() {
    const modalRef = this.modalService.open(ModalMembersComponent, { centered: true });
    // modalRef.componentInstance.data = this.user;

    modalRef.result.then( (result) => {
      // console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // ----------- method for show modal and add new member --------------------
  onAddMember() {
    const modalRefAdd = this.modalService.open(ModalAddEditMembersComponent, { centered: true });

    modalRefAdd.result.then( (result) => {
      // console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // ----------- method for show modal and edit member details ---------------
  onEditDetails() {
    const modalRefEdit = this.modalService.open(ModalAddEditMembersComponent, { centered: true });

    modalRefEdit.result.then( (result) => {
      // console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // ------------ method for show modal and delete member details -------------
  onDelDetails(targetModal) {
    const modelRefDel = this.modalService.open(targetModal, { centered: true });

    modelRefDel.result.then((result) => {
      if (result === 'Yes') {
        // ---- delete data from api
      }
    }).catch((error) => {
      console.log(error);
    });

  }

}

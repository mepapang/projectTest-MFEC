import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberApiService } from '../service/member-api.service';
import { Member } from '../model/member.model';
import { ModalAddEditMembersComponent } from './modal-add-edit-members/modal-add-edit-members.component';

@Component({
  selector: 'app-modal-members',
  templateUrl: './modal-members.component.html',
  styleUrls: ['./modal-members.component.css']
})
export class ModalMembersComponent implements OnInit {

  // @Input()id: number;
  @Input() public dataMember: any;
  memberDetail: Member;
  constructor(
    public activeModal: NgbActiveModal,
    public modalService: NgbModal,
    private memberService: MemberApiService
  ) {
  }

  ngOnInit() {
    this.getdataMemberById(this.dataMember.memberId);
  }

  // --------- method for get Member by id from DB ----------
  getdataMemberById(id: number) {
    this.memberService.getMemberById(id).subscribe( (result) => {
      if (result) {
        this.memberDetail = result;
      }
    });
  }

  // --------- method for open modal edit ----------
  openModalEdit() {
    const modalRefEdit = this.modalService.open(ModalAddEditMembersComponent, { centered: true });
    modalRefEdit.componentInstance.dataMemberDetail = this.memberDetail;

    modalRefEdit.result.then(() => {
      this.activeModal.close();
    });
  }

}

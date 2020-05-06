import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMembersComponent } from '../modal-members/modal-members.component';
import { ModalAddEditMembersComponent } from '../modal-members/modal-add-edit-members/modal-add-edit-members.component';
import { MemberApiService } from '../service/member-api.service';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Member } from '../model/member.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  iconEdit = faPen;
  iconDel = faTrash;

  headers = ['ID', 'First name', 'Last name'];
  memberList: Member[];

  constructor(
    public modalService: NgbModal,
    private memberService: MemberApiService) { }

  ngOnInit() {
    this.getMemberList();
  }

  // ----------- method for get Member list from DB -----------------
  getMemberList(): void {
    this.memberService.getAllMembers().subscribe( (data) => {
        this.memberList = data;
    });
  }

  // ----------- method for show modal and show detail in modal ---------------
  onShowDetails(member) {
    const modalRef = this.modalService.open(ModalMembersComponent, { centered: true });
    modalRef.componentInstance.dataMember = member;

    modalRef.result.then( (result) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  // ----------- method for show modal and add new member --------------------
  onAddMember() {
    const memberData = {
      memberId: null,
      fname: '',
      lname: '',
      tel: '',
      email: ''
    };
    const modalRefAdd = this.modalService.open(ModalAddEditMembersComponent, { centered: true });
    modalRefAdd.componentInstance.dataMemberDetail = memberData;

    modalRefAdd.result.then( () => {
      this.getMemberList();
    }).catch((error) => {
      console.log(error);
    });
  }

  // ----------- method for show modal and edit member details ---------------
  onEditDetails(member) {
    const modalRefEdit = this.modalService.open(ModalAddEditMembersComponent, { centered: true });
    modalRefEdit.componentInstance.dataMemberDetail = member;

    modalRefEdit.result.then( () => {
      this.getMemberList();
    }).catch((error) => {
      console.log(error);
    });
  }

  // ------------ method for show modal and delete member details -------------
  onDelDetails(targetModal, memberid) {
    const modelRefDel = this.modalService.open(targetModal, { centered: true });

    modelRefDel.result.then((result) => {
      if (result === 'Yes') {
        this.memberService.deleteMember(memberid).subscribe();
        this.getMemberList();
      }
    });
  }

}

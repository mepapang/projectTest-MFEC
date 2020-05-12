import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMembersComponent } from '../modal-members/modal-members.component';
import { ModalAddEditMembersComponent } from '../modal-members/modal-add-edit-members/modal-add-edit-members.component';
import { MemberApiService } from '../service/member-api.service';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Member } from '../model/member.model';
import { ToastService } from '../service/toast.service';

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
    private memberService: MemberApiService,
    public toastService: ToastService) { }

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

    modalRef.result.then( (data) => {
      this.getMemberList();
      if (data !== 'close') {
        this.showToast('Member updated successfully', 'bg-success text-light');
      }
    }).catch((error) => {
      console.log(error);
      this.showToast('Error! Can not update member.', 'bg-danger text-light');
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

    modalRefAdd.result.then( (data) => {
      this.getMemberList();
      if (data !== 'close') {
        this.showToast('Member added successfully', 'bg-success text-light');
      }
    }).catch((error) => {
      console.log(error);
      this.showToast('Error! Can not add member.', 'bg-danger text-light');
    });
  }

  // ----------- method for show modal and edit member details ---------------
  onEditDetails(member) {
    const modalRefEdit = this.modalService.open(ModalAddEditMembersComponent, { centered: true });
    modalRefEdit.componentInstance.dataMemberDetail = member;

    modalRefEdit.result.then( (data) => {
      this.getMemberList();
      if (data !== 'close') {
        this.showToast('Member updated successfully', 'bg-success text-light');
      }
    }).catch((error) => {
      console.log(error);
      this.showToast('Error! Can not update member.', 'bg-danger text-light');
    });
  }

  // ------------ method for show modal and delete member details -------------
  onDelDetails(targetModal, memberid: number) {
    const modelRefDel = this.modalService.open(targetModal, { centered: true });

    modelRefDel.result.then((result) => {
      if (result === 'Yes') {
        this.memberService.deleteMember(memberid).subscribe((message) => {
          this.showToast('Member has been deleted', 'bg-success text-light');
        }, error => {
          console.log('Error', error);
          this.showToast('Error! Can not delete member.', 'bg-danger text-light');
        });
        this.getMemberList();
      }
    });
  }

  showToast(message: string, className: string) {
    this.toastService.show(message, {
      classname: className,
      delay: 5000 ,
      autohide: true,
    });
  }

}

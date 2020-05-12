import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberApiService } from 'src/app/service/member-api.service';

@Component({
  selector: 'app-modal-add-edit-members',
  templateUrl: './modal-add-edit-members.component.html',
  styleUrls: ['./modal-add-edit-members.component.css']
})
export class ModalAddEditMembersComponent implements OnInit {

  @Input() public dataMemberDetail: any;

  formAddEdit = new FormGroup({
    memberId: new FormControl({value: '', disabled: true}),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    tel: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(public activeModal: NgbActiveModal, private memberService: MemberApiService) { }

  ngOnInit() {
    this.setData();
  }

  // ----- method for set value in input ----------
  setData() {
    this.formAddEdit.patchValue({
      memberId: this.dataMemberDetail.memberId,
      fname: this.dataMemberDetail.fname,
      lname: this.dataMemberDetail.lname,
      tel: this.dataMemberDetail.tel,
      email: this.dataMemberDetail.email
    });
  }

  // -------- method for add and edit member to DB --------
  onSubmit() {
    if (this.formAddEdit.getRawValue().memberId !== null) {
      this.memberService.updateMember(this.formAddEdit.getRawValue()).subscribe( result => {
        if (result) {
          this.activeModal.close();
        }
      });
    } else {
      this.memberService.createMember(this.formAddEdit.value).subscribe( data => {
        if (data) {
          this.activeModal.close();
        }
      });
    }
  }

  cancel() {
    this.activeModal.close('close');
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-members',
  templateUrl: './modal-members.component.html',
  styleUrls: ['./modal-members.component.css']
})
export class ModalMembersComponent implements OnInit {

  // @Input()id: number;
  @Input() public dataMember: any;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() {
    // console.log(this.dataMember);
  }

}

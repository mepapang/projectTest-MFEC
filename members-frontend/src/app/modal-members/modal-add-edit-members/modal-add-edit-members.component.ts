import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-edit-members',
  templateUrl: './modal-add-edit-members.component.html',
  styleUrls: ['./modal-add-edit-members.component.css']
})
export class ModalAddEditMembersComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

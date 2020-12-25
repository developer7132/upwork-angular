import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job, JobObject } from '../../../services/job'

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.scss']
})
export class JobModalComponent implements OnInit {

  @Input() isOpenjobModal = new Boolean;
  @Input() job: Job = new JobObject;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  closeJobModal () {
    this.closeModal.emit();
    console.log('colse', this.job)
  }

  ngOnInit(): void {
    console.log(this.job)
  }

}

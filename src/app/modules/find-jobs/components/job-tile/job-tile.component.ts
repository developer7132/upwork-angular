import { Component, OnInit, Input } from '@angular/core';
import { Job, JobObject } from '../../services/job'

@Component({
  selector: 'app-job-tile',
  templateUrl: './job-tile.component.html',
  styleUrls: ['./job-tile.component.scss']
})
export class JobTileComponent implements OnInit {

  @Input() job: Job = new JobObject;
  isOpenjobModal = new Boolean;
  selectedJob = new JobObject;

  openModal (job: JobObject) {
    this.isOpenjobModal = !this.isOpenjobModal
    this.selectedJob = job
    console.log(this.selectedJob)
  }
  closeModal () {
    this.isOpenjobModal = false
    console.log(this.isOpenjobModal)
  }
  constructor() { }

  ngOnInit(): void {
    this.isOpenjobModal = !this.isOpenjobModal
  }

}

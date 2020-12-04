import { Component, OnInit } from '@angular/core';
import {Job} from '../../services/job';
import { Jobs } from '../../services/mock-jobs';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  
  jobs: Job[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.jobs = Jobs
  }

}

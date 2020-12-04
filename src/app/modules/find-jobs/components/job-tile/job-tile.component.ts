import { Component, OnInit, Input } from '@angular/core';
import { Job, JobObject } from '../../services/job'

@Component({
  selector: 'app-job-tile',
  templateUrl: './job-tile.component.html',
  styleUrls: ['./job-tile.component.scss']
})
export class JobTileComponent implements OnInit {

  @Input() job: Job = new JobObject;

  constructor() { }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-work',
  templateUrl: './find-work.component.html',
  styleUrls: ['./find-work.component.less']
})
export class FindWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('find-work')
  }

}

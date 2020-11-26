import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  domestics: string[] = [
                'U.S. Only',
                'My Feed',
                'Any',
                'My Search',
                'Recommended'
              ];
  selectedDomestic: string = 'U.S. Only';
  constructor() { }
  onNgModelChange(e: Object): void{
    console.log(e)
  }
  ngOnInit(): void {
  }

}

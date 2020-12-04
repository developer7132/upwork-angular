import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  domestics: {
    name: string;
  }[] = [
    {
      name: 'U.S. Only'
    },
    {
      name: 'My Feed'
    },
    {
      name: 'Any'
    },
    {
      name: 'Recommended'
    },
  ];
  recentSearch: string[] = [
    'Django',
    'Flask',
    'React',
    'React Native',
    'Vue'
  ];
  MyCategories: string[] = [
    'Web Development',
    'Other - Software development',
    'Script & Utilites',
    'Mobile developmetn',
    'Web Design'
  ];
  selectedDomestic: string[] = ['U.S. Only'];
  constructor() { }
  onNgModelChange(e: object): void{
    console.log(e)
  }
  ngOnInit(): void {
  }

}

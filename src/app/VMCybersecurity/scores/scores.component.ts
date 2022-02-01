import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
//    single = [
//         {
//           "name": "Germany",
//           "value": 8940000
//         },
//         {
//           "name": "USA",
//           "value": 5000000
//         },
//         {
//           "name": "France",
//           "value": 7200000
//         },
//         {
//           "name": "UK",
//           "value": 5200000
//         },
//         {
//           "name": "Italy",
//           "value": 7700000
//         },
//         {
//           "name": "Spain",
//           "value": 4300000
//         }
//       ];
//   view: [number, number] = [700, 400];

//   colorScheme:string='#5AA454';
//   cardColor: string = '#232837';

  constructor() { }

  ngOnInit(): void {
      

  }
  onSelect(event:any){
      console.log(event)
  }
}

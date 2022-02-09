import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {
  defaultElevation = 3;
  raisedElevation = 11;
  dontshow:boolean=false;
  dontshowpca:boolean=false;
  dontshowmalcom:boolean=false;
  dontshowcyberchamp:boolean=false;
  chartData = [
    {
      data: [90,10],
      label: 'Account A'
    }
  ];
  chartLabels = [
    ' 90 % Overall Scores',
    
  ];
  colors: Color[] = [
    {
      backgroundColor: [
        '#0078AE',
        '#C0C2C4',
      
      ]
    }
  ];
  chartOptions = {
    responsive: true
  };
  // CSET chart
  chartDataCSET = [
    {
      data: [90,10],
      label: 'Account A'
    }
  ];
  chartLabelsCSET = [
    ' 85 % CSET Assestment Overall',
    
  ];
// Con-pca chart
chartDataConpca= [
  {
    data: [85,15],
    label: 'Con-PCA'
  }
];
chartLabelsConpca = [
  ' 60 % Con-PCA Report Rate',
  
];
//  Cyber-champ chart
chartDataCyberchamp= [
  {
    data: [50,50],
    label: 'Cyber-Champ'
  }
];
chartLabelsCyberchamp = [
  '50 % Training Cyber-Champ'
  
];
// Malcom
chartDataMalcom= [
  {
    data: [90,10],
    label: 'Malcom '
  }
];
chartLabelsMalcom = [
  '60 % Malcom Assestment Overall'
];

  constructor() { }

  ngOnInit(): void {
      

  }
  onSelect(event:any){
      console.log(event)
  }
       
  showinstalledCset(){
    this.dontshow=true;
  }
  showinstalledPCA(){
    this.dontshowpca=true;
  }
  showinstalledMalcom(){
    this.dontshowmalcom=true;
  }
  showinstalledCyberchamp(){
    this.dontshowcyberchamp=true;
  }
  openLink(){
  
    window.open('https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe');
    window.open('https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe');
    window.open('https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe');
  
  }
}

    import { Component, OnInit, ViewChild} from '@angular/core';
    import { HttpClient, HttpClientModule } from '@angular/common/http';
    import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
   import { Color } from 'ng2-charts';
  import { Chart } from 'chart.js';
  
    @Component({
      selector: 'app-main-page',
      templateUrl: './main-page.component.html',
      styleUrls: ['./main-page.component.css']
    })


 export class MainPageComponent implements OnInit {
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
        label: 'Account A'
      },
      {
        data: [120, 455, 100, 340],
        label: 'Account B'
      },
      {
        data: [45, 67, 800, 500],
        label: 'Account C'
      }
    ];
    chartLabelsMalcom = [
      '60 % Assestment Overall', '70% of all CSET controls validated '
      
    ];
    
      constructor( ) { }

      ngOnInit(): void {
        const data = {
          labels: ['90 % Assessment Overall'],
          datasets: [{
            axis: 'y',
            label: 'Overall Score',
            data: [90,100],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
            
          }]
        };
    
        // config 
        const config = {
          type: 'bar',
          data,
          options: {
            indexAxis: 'x',
            scales: {
              xAxes: [{
                   stacked: true,
              }],
              yAxes: [{
                   stacked: true
              }]
         }
          }
        };
    
        // render init block
        const myChart1 = new Chart('myChart1',
          config
        );
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

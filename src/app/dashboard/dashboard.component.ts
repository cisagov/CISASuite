import { Component, OnInit } from '@angular/core';
import { Color } from "ng2-charts";
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  defaultElevation = 3;
  raisedElevation = 11;
  chartData = [
    {
      data: [70, 30],
      label: "Account A",
    },
  ];
  chartLabels = [" 70 %"];
  colors: Color[] = [
    {
      backgroundColor: ["#999999", "#C0C2C4"],
    },
  ];
  chartOptions = {
    responsive: true,
  };

  chartDataCset = [
    {
      data: [90, 10],
      label: "Account A",
    },
  ];
  chartLabelsCset = [" 90% "];
  colorsCset: Color[] = [
    {
      backgroundColor: ["#0078AE", "#FFFFF"],
    },
  ];
  chartDataconpca = [
    {
      data: [70, 30],
      label: "Account A",
    },
  ];
  chartLabelsconpca = [" 70 %"];
  colorsconpca: Color[] = [
    {
      backgroundColor: ["#0078AE", "#FFFFF"],
    },
  ];
  chartDatamalcom = [
    {
      data: [60, 40],
      label: "60% Overall Malcom Score",
    },
    {
      data: [70, 30],
      label: "70% of all CSET Controls Validated",
      fill: true,
      borderRadius: 15,
      borderWidth: 2,

    },
    {
      data: [40, 60],
      label: "40% of all Validated Questions Passing",
    },
  ];
  chartLabelsmalcom = [" 90% "];
  colorsmalcom: Color[] = [
    {
      backgroundColor: ["#0078AE", "#FFFFF"],
    },
  ];
  chartDatacyber = [
    {
      data: [70, 100],
      label: "Cyber-Champ",
    },
  ];
  chartLabelscyber = [" Cyber-Champ"];
  colorscyber: Color[] = [
    {
      backgroundColor: ["#0078AE", "#FFFFF"],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  
const myChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['Cyber Champ Recommendations'],
        datasets: [{
            label: '50% Completed',
            data: [0, 30, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            // y: {
            //     beginAtZero: true
            // }
        }
    }
});
  }

}

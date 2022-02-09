import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { Color } from "ng2-charts";
import { Chart } from "chart.js";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  defaultElevation = 3;
  raisedElevation = 11;
  dontshow: boolean = false;
  dontshowpca: boolean = false;
  dontshowmalcom: boolean = false;
  dontshowcyberchamp: boolean = false;
  chartData = [
    {
      data: [90, 10],
      label: "Account A",
    },
  ];
  chartLabels = [" 90 % Overall Scores"];
  colors: Color[] = [
    {
      backgroundColor: ["#0078AE", "#C0C2C4"],
    },
  ];
  chartOptions = {
    responsive: true,
  };
  // CSET chart
  chartDataCSET = [
    {
      data: [90, 10],
      label: "Account A",
    },
  ];
  chartLabelsCSET = [" 85 % CSET Assestment Overall"];
  // Con-pca chart
  chartDataConpca = [
    {
      data: [85, 15],
      label: "Con-PCA",
    },
  ];
  chartLabelsConpca = [" 60 % Con-PCA Report Rate"];
  //  Cyber-champ chart
  chartDataCyberchamp = [
    {
      data: [50, 50],
      label: "Cyber-Champ",
    },
  ];
  chartLabelsCyberchamp = ["50 % Training Cyber-Champ"];
  // Malcom
  chartDataMalcom = [
    {
      data: [90, 10],
      label: "Malcom ",
    },
  ];
  chartLabelsMalcom = ["60 % Malcom Assestment Overall"];

  constructor() {}

  ngOnInit(): void {}

  showinstalledCset() {
    this.dontshow = true;
  }
  showinstalledPCA() {
    this.dontshowpca = true;
  }
  showinstalledMalcom() {
    this.dontshowmalcom = true;
  }
  showinstalledCyberchamp() {
    this.dontshowcyberchamp = true;
  }
  openLink() {
    window.open(
      "https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe"
    );
    window.open(
      "https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe"
    );
    window.open(
      "https://github.com/cisagov/cset/releases/download/v11.0.0.0/CSETStandAloneV11.exe"
    );
  }
}

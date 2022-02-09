import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conpca',
  templateUrl: './conpca.component.html',
  styleUrls: ['./conpca.component.css']
})
export class ConpcaComponent implements OnInit {
  defaultElevation = 3;
  raisedElevation = 11;
  dontshow:boolean=false;
  dontshowpca:boolean=false;
  dontshowmalcom:boolean=false;
  dontshowcyberchamp:boolean=false;
  currentRate =4.2;
  constructor() { }

  ngOnInit(): void {
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
}

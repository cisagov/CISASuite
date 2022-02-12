import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malcom',
  templateUrl: './malcom.component.html',
  styleUrls: ['./malcom.component.css']
})
export class MalcomComponent implements OnInit {
  defaultElevation = 3;
  raisedElevation = 11;
  dontshow:boolean=false;
  dontshowpca:boolean=false;
  dontshowmalcom:boolean=false;
  dontshowcyberchamp:boolean=false;
 
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

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolsuite',
  templateUrl: './toolsuite.component.html',
  styleUrls: ['./toolsuite.component.css']
})
export class ToolsuiteComponent implements OnInit {
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

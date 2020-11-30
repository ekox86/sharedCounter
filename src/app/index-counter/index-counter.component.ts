import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-counter',
  templateUrl: './index-counter.component.html',
  styleUrls: ['./index-counter.component.css']
})
export class IndexCounterComponent implements OnInit {
  
  contatore= 0;
  constructor() { }

  ngOnInit() {
  }

   
  cresc(){
    this.contatore++;
    console.log("1");
  }

  decresc(){
    this.contatore--;
    console.log("-1");
  }
  reset(){
    this.contatore=0;
  }

  sottDieci(){
    this.contatore = this.contatore -10;
    
  }

  sottVenti(){
    this.contatore = this.contatore -20;
  }

  sottCento(){
    this.contatore = this.contatore -100;
  }

  add10(){
    this.contatore = this.contatore +10;
  }
  
  add20(){
    this.contatore = this.contatore +20;
  }

  add100(){
   
      this.contatore = this.contatore +100;
    
  }
}

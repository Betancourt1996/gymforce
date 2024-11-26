import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit, OnDestroy {
  @Input() blockInput = false;
  constructor() { }

  ngOnInit(): void {
    if (this.blockInput){
      document.onkeydown = function (e) {
        return false;
      }
    }
  }

  ngOnDestroy(): void{
    if (this.blockInput){
      document.onkeydown = function (e) {
          return true;
      }
    }
  }

}

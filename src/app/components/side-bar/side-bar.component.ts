import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('sideBar') sideBar: ElementRef;
  toggle = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onToggle() {
    if(this.toggle){
      this.renderer.addClass(this.sideBar.nativeElement, 'hide');
    }else{
      this.renderer.removeClass(this.sideBar.nativeElement, 'hide')
    }
    this.toggle = !this.toggle;
  }
}

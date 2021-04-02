import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle = false;
  @ViewChild('subMenu') submenu: ElementRef;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  onToggle() {
    if (this.toggle) {
      this.render.removeClass(this.submenu.nativeElement, 'show-sub');
    } else {
      this.render.addClass(this.submenu.nativeElement, 'show-sub');
    }
    this.toggle = !this.toggle;
  }

}

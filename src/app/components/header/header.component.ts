import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Statistic } from 'src/app/models/statistics.model';
import { StatisticsSevice } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle = false;
  @ViewChild('subMenu') submenu: ElementRef;
  statistics: Statistic;
  subStats: Observable<Statistic>;

  constructor(private render: Renderer2, private statisticsService: StatisticsSevice) { }

  ngOnInit(): void {
    this.subStats = this.statisticsService.statsSub;
    
    this.statisticsService.getStatistics();
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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.scss']
})
export class CampaignItemComponent implements OnInit {

  @Input() campaignItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}

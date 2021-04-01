import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Campaign } from 'src/app/models/campaign.model';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit, OnDestroy {

  campaigns: Campaign[] = [];
  campaignSubscription: Subscription;

  constructor(private campaignService : CampaignService) { }

  ngOnInit(): void {
    this.campaignSubscription = this.campaignService.campaignsEmitter.subscribe(data =>{
      this.campaigns = data;
    });
    
    this.campaignService.getCampaigns();
  }
  
  ngOnDestroy(){
    this.campaignSubscription.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Campaign } from 'src/app/models/campaign.model';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[] = [];

  constructor(private campaignService : CampaignService) { }

  ngOnInit(): void {
    
    this.campaignService.getCampaigns().subscribe( camp => {
      this.campaigns = camp;
    }, error =>{
      console.log(error);
    });
  }
  
}

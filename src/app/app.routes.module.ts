import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CampaignComponent } from "./components/campaign/campaign.component";


const routes = [
    { path: '', redirectTo: '/campaign', pathMatch: 'full'},
    { path: 'dashboard', component: CampaignComponent },
    { path: 'campaign', component: CampaignComponent },
    { path: 'patients', component: CampaignComponent },
    { path: 'programs', component: CampaignComponent },
    { path: 'observation', component: CampaignComponent },
    { path: 'statistics', component: CampaignComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutesModule{}
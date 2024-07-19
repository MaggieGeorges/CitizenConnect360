import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { CreateNewPasswordComponent } from './Components/create-new-password/create-new-password.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { EducateComponent } from './Components/educate/educate.component';
import { CitizensPollsComponent } from './Components/citizens-polls/citizens-polls.component';
import { CitizensProfileComponent } from './Components/citizens-profile/citizens-profile.component';
import { CitizensviewsComponent } from './Components/citizensviews/citizensviews.component';
import { AdmincitizensmanageComponent } from './Components/admincitizensmanage/admincitizensmanage.component';
import { AdmingovofficialmanageComponent } from './Components/admingovofficialmanage/admingovofficialmanage.component';
import { GovOfficialviewsComponent } from './Components/gov-officialviews/gov-officialviews.component';
import { GovofficialincidentsComponent } from './Components/govofficialincidents/govofficialincidents.component';
import { GovofficilpollsComponent } from './Components/govofficilpolls/govofficilpolls.component';
import { CitizensIncidentsComponent } from './Components/citizens-incidents/citizens-incidents.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(PdfViewerModule),
    {provide: ' HeaderComponent', useClass: HeaderComponent},
    {provide: ' FooterComponent', useClass: FooterComponent},
    {provide: ' ResetpasswordComponent ', useClass: ResetpasswordComponent},
    {provide: ' CreateNewPasswordComponent', useClass: CreateNewPasswordComponent},
    {provide: ' LandingPageComponent', useClass: LandingPageComponent},
    {provide: ' EducateComponent', useClass: EducateComponent},
    {provide: ' CitizensIncidentsComponent ', useClass: CitizensIncidentsComponent},
    {provide: ' CitizensPollsComponent', useClass: CitizensPollsComponent},
    {provide: ' CitizensProfileComponent', useClass:CitizensProfileComponent},
    {provide: ' CitizensviewsComponent', useClass: CitizensviewsComponent},
    {provide: ' AdmincitizensmanageComponent', useClass:  AdmincitizensmanageComponent},
    {provide: ' AdmingovofficialmanageComponent', useClass: AdmingovofficialmanageComponent},
    {provide: ' GovOfficialviewsComponent', useClass: GovOfficialviewsComponent},
    {provide: ' GovofficialincidentsComponent', useClass: GovofficialincidentsComponent},
    {provide: ' GovofficilpollsComponent', useClass: GovofficilpollsComponent},
  ]
};

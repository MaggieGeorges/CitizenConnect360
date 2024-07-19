import { Routes } from '@angular/router';
import { EducateComponent } from './Components/educate/educate.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { CreateNewPasswordComponent } from './Components/create-new-password/create-new-password.component';
import { CitizensviewsComponent } from './Components/citizensviews/citizensviews.component';
import { CitizensIncidentsComponent } from './Components/citizens-incidents/citizens-incidents.component';
import { CitizensPollsComponent } from './Components/citizens-polls/citizens-polls.component';
import { CitizensProfileComponent } from './Components/citizens-profile/citizens-profile.component';
import { AdmincitizensmanageComponent } from './Components/admincitizensmanage/admincitizensmanage.component';
import { AdmingovofficialmanageComponent } from './Components/admingovofficialmanage/admingovofficialmanage.component';
import { GovOfficialviewsComponent } from './Components/gov-officialviews/gov-officialviews.component';
import { GovofficialincidentsComponent } from './Components/govofficialincidents/govofficialincidents.component';
import { GovofficilpollsComponent } from './Components/govofficilpolls/govofficilpolls.component';
import { CitizenGuard } from './Guards/citizen.guard';
import { AdminGuard } from './Guards/admin.guards';
import { GovOfficialGuard } from './Guards/gov-official.guard';

export const routes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'resetpassword', component: ResetpasswordComponent},
    { path: 'createnewpassword', component: CreateNewPasswordComponent},
    { path: 'EducateComponent', component: EducateComponent},
    { path: 'CitizensviewsComponent', component: CitizensviewsComponent},
    { path: 'CitizensIncidentsComponent', component: CitizensIncidentsComponent},
    { path: 'CitizensPollsComponent', component: CitizensPollsComponent},
    { path: 'CitizensProfileComponent', component: CitizensProfileComponent},
    { path: 'AdmincitizensmanageComponent', component: AdmincitizensmanageComponent},
    { path: 'AdmingovofficialmanageComponent', component: AdmingovofficialmanageComponent},
    { path: 'GovOfficialviewsComponent', component: GovOfficialviewsComponent},
    { path: 'GovofficialincidentsComponent', component: GovofficialincidentsComponent},
    { path: 'GovofficilpollsComponent', component: GovofficilpollsComponent},
    { path: 'EducateComponent', component: EducateComponent, canActivate: [CitizenGuard]},
    { path: 'GovOfficialviewsComponent', component: GovOfficialviewsComponent, canActivate: [GovOfficialGuard]},
    { path: 'AdmincitizensmanageComponent', component: AdmincitizensmanageComponent, canActivate: [AdminGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full'},

   //{ path: '**', redirectTo: '/login' }
];

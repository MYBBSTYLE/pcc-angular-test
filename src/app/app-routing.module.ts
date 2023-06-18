import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitTaxFilingPageComponent } from './pages/submit-tax-filing-page/submit-tax-filing-page.component';

const routes: Routes = [
  {
    path: '',
    component: SubmitTaxFilingPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

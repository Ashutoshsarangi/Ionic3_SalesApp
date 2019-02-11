import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Page Declaration
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import {CompanyListPage} from '../pages/company-list/company-list'
import {CompanyDetailsPage} from '../pages/company-details/company-details'
import { StockDetailPage } from '../pages/stock-detail/stock-detail';
import {InvoicePage} from '../pages/invoice/invoice'
import { DealerAsctionPage } from '../pages/dealer-asction/dealer-asction'
import { SalePage } from '../pages/sale/sale'
import { DealerIncentivesPage } from '../pages/dealer-incentives/dealer-incentives'

//Modal Declaration 
import { ActionModalPage } from '../pages/action-modal/action-modal'
import { InvoiceModalPage } from '../pages/invoice-modal/invoice-modal'
import { IncentivesPage } from '../pages/incentives/incentives'
import { PlantDetailPage } from '../pages/plant-detail/plant-detail'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientServicesProvider } from '../providers/client-services/client-services';
import { WebServicesProvider } from '../providers/web-services/web-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CompanyListPage,
    CompanyDetailsPage,
    ActionModalPage,
    InvoiceModalPage,
    IncentivesPage,
    StockDetailPage,
    PlantDetailPage,
    InvoicePage,
    DealerAsctionPage,
    SalePage,
    DealerIncentivesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CompanyListPage,
    CompanyDetailsPage,
    ActionModalPage,
    InvoiceModalPage,
    IncentivesPage,
    StockDetailPage,
    PlantDetailPage,
    InvoicePage,
    DealerAsctionPage,
    SalePage,
    DealerIncentivesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    ClientServicesProvider,
    WebServicesProvider,
  ]
})
export class AppModule {}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Menu List declare pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CompanyListPage } from '../pages/company-list/company-list';
import { StockDetailPage } from '../pages/stock-detail/stock-detail';
import { InvoicePage } from '../pages/invoice/invoice';
import { DealerAsctionPage } from '../pages/dealer-asction/dealer-asction';
import { DealerIncentivesPage } from '../pages/dealer-incentives/dealer-incentives'
import { SalePage } from '../pages/sale/sale'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'List', component: ListPage, icon:'information-circle'},
      { title: 'Campany Names', component: CompanyListPage, icon:'information-circle'},
      { title: 'Stock Details', component: StockDetailPage, icon:'information-circle'},
      { title: 'Invoices', component: InvoicePage, icon:'information-circle'},
      { title: 'Action', component: DealerAsctionPage, icon:'information-circle'},
      { title: 'Sell', component: SalePage, icon:'information-circle'},
      { title: 'Incentives', component: DealerIncentivesPage, icon:'information-circle'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}

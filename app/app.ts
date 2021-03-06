import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ResourcesPage} from './pages/resources/resources';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, attributes?: [string, string] }>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'People', component: ResourcesPage, attributes: ['name', 'gender'] },
      { title: 'Films', component: ResourcesPage, attributes: ['title', 'release_date'] },
      { title: 'Starships', component: ResourcesPage, attributes: ['name', 'model'] },
      { title: 'Vehicles', component: ResourcesPage, attributes: ['name', 'model'] },
      { title: 'Species', component: ResourcesPage, attributes: ['name', 'language'] },
      { title: 'Planets', component: ResourcesPage, attributes: ['name', 'terrain'] }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, { title: page.title, attributes: page.attributes });
  }
}

ionicBootstrap(MyApp);

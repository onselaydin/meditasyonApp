import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'SonEklemeler',url: '/home',icon: 'home',category:"0"},
    { title: 'Favorilerim',url: '/favorits',icon: 'star',category:"00"},
    { title: 'İyi Bir Uyku',url: '/sleeps',icon: 'bed',category:"1"},
    { title: 'Kişisel Gelişim',url: '/home',icon: 'home',category:"2"},
    { title: 'Mistik İşler',url: '/home',icon: 'home',category:"3"},
    { title: 'Olumlamalar',url: '/home',icon: 'list',category:"4"},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../Shared/services/file.service';
import { Router } from '@angular/router';
import { SearchBehaviorService } from '../../../Shared/services/searchBehavior.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpenMenu = false;
  constructor
    (
    private fileService: FileService, private route: Router,
    private searchBehavior: SearchBehaviorService,
    private translate: TranslateService
    ) {
    if (localStorage.getItem('language') === 'vn') {
      translate.setDefaultLang('vn');
      this.isLanguage = 'vn';
    } else {
      translate.setDefaultLang('en');
      this.isLanguage = 'en';
    }

  }

  isDashboard: Boolean = false;
  isListMusic: Boolean = false;
  isManagerUser: Boolean = false;
  isUpdateUser: Boolean = false;
  isLanguage: String = 'vn';
  url: any;
  ngOnInit() {
    this.url = this.route.url;
    if (this.url === '/home/dashboard') {
      this.isDashboard = true;
      this.isListMusic = false;
      this.isUpdateUser = false;
      this.isManagerUser = false;
    }
    if (this.url === '/home/listmusic') {
      this.isDashboard = false;
      this.isListMusic = true;
      this.isUpdateUser = false;
      this.isManagerUser = false;
    }
    if (this.url === '/home/manager') {
      this.isDashboard = false;
      this.isManagerUser = true;
      this.isListMusic = false;
      this.isUpdateUser = false;
    }
    if (this.url === '/home/register') {
      this.isDashboard = false;
      this.isUpdateUser = true;
      this.isListMusic = false;
      this.isManagerUser = false;
    }
  }
  open_Menu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
  changeMenu(menu) {
    if (menu === 1) {
      this.isDashboard = true;
      this.isListMusic = false;
      this.isUpdateUser = false;
      this.isManagerUser = false;
    }
    if (menu === 2) {
      this.isDashboard = false;
      this.isListMusic = true;
      this.isUpdateUser = false;
      this.isManagerUser = false;
    }
    if (menu === 3) {
      this.isDashboard = false;
      this.isManagerUser = true;
      this.isListMusic = false;
      this.isUpdateUser = false;
    }
    if (menu === 4) {
      this.isDashboard = false;
      this.isUpdateUser = true;
      this.isListMusic = false;
      this.isManagerUser = false;
    }
  }
  fileChangeEvent(fileInput: any) {
    const formData: any = new FormData();
    const files: File = fileInput.target.files;
    console.log(files);
    this.fileService.uploadFile(formData, 'userId').subscribe(result => {
    });
  }
  logout() {
    localStorage.removeItem('x');
    this.route.navigate(['../login']);
  }
  searchAudio(event) {
    this.searchBehavior.sendKeySearch(event.target.value);
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  changedNhiemVu(value) {
    if (value.target.value !== '') {
      console.log('oke');
      this.switchLanguage(value.target.value);
      localStorage.setItem('language', value.target.value);
      this.isLanguage = value.target.value;
    }
  }
}

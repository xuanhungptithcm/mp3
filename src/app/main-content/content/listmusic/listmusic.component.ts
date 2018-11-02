import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioService } from '../../../Shared/services/audio.service';
import { SearchBehaviorService } from '../../../Shared/services/searchBehavior.service';
import { Subscription } from 'rxjs/Subscription';
declare var $: any;
@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.component.html',
  styleUrls: ['./listmusic.component.css']
})
export class ListmusicComponent implements OnInit, OnDestroy {


  constructor(private audioService: AudioService, private searchBehavior: SearchBehaviorService) { }
  listAudio: any[];
  listSearch: any[];
  tam: any = 0;
  audioSearch: String;
  subcriber: Subscription[] = [];
  ngOnInit() {
    this.get_List();
    this.subcriber.push(
      this.searchBehavior.currentMessage.subscribe(mess => {
        this.audioSearch = mess;
        try {
          if (this.listAudio) {
            this.filterList(mess);
          }
        } catch (error) {
        }
      })
    );

  }
  filterList(key: String) {
    this.listSearch = this.listAudio.filter(audio => {
      audio = audio.substr(audio, audio.length - 3);
      return audio.toString().toLowerCase().indexOf(key.toLowerCase()) !== -1;
    });
  }
  get_List() {
    this.audioService.get_List_Audio().subscribe((list) => {
      this.listAudio = list.files;
    });
  }
  trackByFn(index, item) {
    return item;
  }
  playMusic(audio, i) {
    // #\30 > div.weekly_left > div > div.w_tp_song_img > div.ms_play_icon
    // ms_active_play#\30 > div.weekly_left > div > div.w_tp_song_img > div.ms_play_icon
    $('#' + this.tam).removeClass('ms_active_play');
    $('#' + i).addClass('ms_active_play');
    $('#' + this.tam + ' .weekly_left .w_tp_song_img .ms_play_icon').html(`<img src="../../../../assets/images/svg/play.svg" alt="">`);
    $('#' + i + ' .weekly_left .w_tp_song_img .ms_play_icon').html(`<div class="ms_bars">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div></div>`);
    this.tam = i;
    const filename = {
      filename: audio
    };
    this.audioService.play_Audio(filename).subscribe((result) => {
      // console.log(result);
    });

  }
  ngOnDestroy(): void {
    this.subcriber.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

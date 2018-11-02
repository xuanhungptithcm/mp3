import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { AudioService } from '../../../../Shared/services/audio.service';
declare var $: any;
@Component({
    selector: 'app-play-audio',
    templateUrl: './play-audio.component.html',
    styleUrls: ['./play-audio.component.scss']
})
export class PlayAudioComponent implements OnInit {
    constructor(private audioService: AudioService) { }
    close_Player: Boolean = false;
    close_Quality: Boolean = false;
    audioBar: any;
    bullet: any;
    playBar: any;
    isPlay: Boolean = false;
    timeDrag: Boolean = false;
    percentage: any = 50;
    hidePlay: Boolean = false;
    ngOnInit() {
        $('.jp-play-bar').css('width', this.percentage + '%');
        this.changeVolume(this.percentage);
        this.playBar = <HTMLElement>document.body.querySelector('.jp-play-bar');
        this.audioBar = <HTMLElement>document.body.querySelector('.jp-seek-bar');
        this.bullet = <HTMLElement>document.body;

        this.audioBar.addEventListener('click', (e) => {
            this.updateBar(e.pageX);
        });
        this.playBar.addEventListener('mousedown', (e) => {
                this.timeDrag = true;
                this.updateBar(e.pageX);
        });
        this.bullet.addEventListener('mouseup', (e) => {
            if (this.timeDrag) {
                this.timeDrag = false;
                this.updateBar(e.pageX);
            }
        });
        this.bullet.addEventListener('mousemove', (e) => {
            if (this.timeDrag) {
                this.updateBar(e.pageX);
            }
        });
    }
    updateBar(x) {
        const progress = $('.jp-progress');
        const position = x - progress.offset().left;
        let percentage = 100 * position / progress.width();
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        this.percentage = Math.floor(percentage);
        this.changeVolume(Math.floor(percentage));
        $('.jp-play-bar').css('width', percentage + '%');
    }
    closePlayer() {
        this.close_Player = !this.close_Player;
        this.hidePlay = !this.hidePlay;
    }
    closeQuality() {
        this.close_Quality = !this.close_Quality;
    }
    changeVolume(value) {
        const volume = {
            volume: value
        };
        this.audioService.set_Volume(volume).subscribe((result) => {
            console.log(result);
        });
    }
    nextAudio() {
        this.audioService.next_Audio().subscribe((result) => {
            console.log(result);
        });
    }
    prevAudio() {
        this.audioService.prev_Audio().subscribe((result) => {
            console.log(result);
        });
    }


}

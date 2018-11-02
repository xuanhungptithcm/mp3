import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Configs } from '../../app.config';
@Injectable()
export class AudioService {
    constructor(private http: Http) { }

    get_List_Audio(): Observable<any> {
        const url = Configs.AUDIO.list;
        return this.http.get(url).map((list) => {
            return list.json();
        });
    }
    play_Audio(filename): Observable<any> {
        const url = Configs.AUDIO.play;
        return this.http.post(url, filename).map((result) => {
            return result.json();
        });
    }
    set_Volume(volume): Observable<any> {
        const url = Configs.AUDIO.volume;
        return this.http.post(url, volume).map((result) => {
            return result.json();
        });
    }
    next_Audio(): Observable<any> {
        const url = Configs.AUDIO.next;
        return this.http.post(url, '').map((result) => {
            return result.json();
        });
    }
    prev_Audio(): Observable<any> {
        const url = Configs.AUDIO.prev;
        return this.http.post(url, '').map((result) => {
            return result.json();
        });
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SearchBehaviorService {
    private messageSource = new BehaviorSubject<any>('');
    currentMessage = this.messageSource.asObservable();
    constructor() { }

    sendKeySearch(value) {
        this.messageSource.next(value);
    }
}

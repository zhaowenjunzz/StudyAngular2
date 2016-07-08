import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import IStar from '../interfaces/star'
import GameSettingsService from './game-settings.service';

@Injectable()
export default class StarService {
    private _starStream: Observable<IStar[]>;

    constructor(
        private _gameSettingService: GameSettingsService
    ) { }

    initStarService(width: number, height: number): Observable<IStar[]> {
        const starNumbers = this._gameSettingService.defaultSettings.starNumbers;
        const starSpeed = this._gameSettingService.defaultSettings.starSpeed;
        const initWidth = width;
        const initHeight = height;

        this._starStream = Observable.range(1, starNumbers)
            .map(() => {
                return {
                    x: Math.floor(Math.random() * initWidth),
                    y: Math.floor(Math.random() * initHeight),
                    size: Math.random() * 3 + 1
                };
            })
            .toArray()
            .flatMap(starArray => {
                return Observable.interval(starSpeed).map(() => {
                    starArray.forEach(star => {
                        if (star.y > initHeight) {
                            star.y = 0;
                        }
                        star.y += 3;
                    });
                    return starArray;
                });
            });

        return this._starStream;
    }
}
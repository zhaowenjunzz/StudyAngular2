import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import IGameUnit from '../interfaces/game-unit';
import ShipService from './ship.service';
import StarService from './star.service';

@Injectable()
export default class GameService {
    private _gameStream: Observable<IGameUnit>;

    constructor(
        private _shipService: ShipService,
        private _starService: StarService
    ) { }

    initGameService(width: number, height: number, canvas: HTMLCanvasElement): Observable<IGameUnit> {

        const shipStrem = this._shipService.initShipService(width, height, canvas);
        const starStream = this._starService.initStarService(width, height);

        this._gameStream = Observable.combineLatest(shipStrem, starStream, (ship, stars) => {
            const gameUnit: IGameUnit = { stars: stars, ship: ship };
            return gameUnit;
        });

        return this._gameStream;
    }
}
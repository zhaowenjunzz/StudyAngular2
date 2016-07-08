import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import IShip from '../interfaces/ship';

@Injectable()
export default class ShipService {
    private _shipStream: Observable<IShip>;

    constructor() {
    }

    initShipService(width: number, height: number, canvas: HTMLCanvasElement): Observable<IShip> {
        const initWidth = width;
        const initHeight = height - 30;

        this._shipStream = Observable.fromEvent(canvas, 'mousemove')
            .map((event: MouseEvent) => {
                const ship: IShip = {
                    x: event.clientX,
                    y: initHeight
                };

                return ship;
            })
            .startWith({
                x: initWidth / 2,
                y: initHeight,
            });

        return this._shipStream;
    }
}
import { Component, Input, ElementRef, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import GameService from '../services/game.service';
import IStar from '../interfaces/star';
import IShip from '../interfaces/ship';
import IGameUnit from '../interfaces/game-unit';

@Component({
    selector: 'spaceship-game',
    template: `
    <div class="center-block" [style.width.px]='gameWidth' [style.height.px]='gameHeight'>
        <canvas #gameCanvas></canvas>
    </div>
    `,
    styles: [
        `
    canvas {
        width:100%;
        height:100%
    }
    `]
})
export default class SpaceShipGameComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    @Input()
    gameWidth: number;

    @Input()
    gameHeight: number;

    @ViewChild("gameCanvas")
    gameCanvas: ElementRef

    constructor(
        private _gameService: GameService
    ) {
        this.gameWidth = 300;
        this.gameHeight = 200;
    }

    ngOnInit(): void {
        const canvas: HTMLCanvasElement = this.gameCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        this._subscription = this._gameService.initGameService(this.gameWidth, this.gameHeight, canvas)
            .subscribe(gameUnit => {
                this.renderScene(ctx, gameUnit);
            });
    }

    ngOnDestroy(): void {
        if (this._subscription && !this._subscription.isUnsubscribed) {
            this._subscription.unsubscribe();
        }
    }

    private renderScene(ctx, gameUnit: IGameUnit): void {
        this.paintStar(ctx, gameUnit.stars);
        this.paintSpaceShip(ctx, gameUnit.ship);
    }

    private paintStar(ctx: CanvasRenderingContext2D, starArray: IStar[]): void {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = '#ffffff';
        starArray.forEach(star => {
            ctx.fillRect(star.x, star.y, star.size, star.size);
        });
    }

    private paintSpaceShip(ctx: CanvasRenderingContext2D, ship: IShip): void {
        this.drawTriangle(ctx, ship.x, ship.y - 100, 20, '#ff0000', 'up');
    }

    private drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, color: string, direction: string): void {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x - width, y);
        ctx.lineTo(x, direction === 'up' ? y - width : y + width);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x - width, y);
        ctx.fill();
    }
}
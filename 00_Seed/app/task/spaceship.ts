import SpaceShipGameComponent from './component/spaceship-game.component';
import IGameSettings from './interfaces/game-settings';
import IStar from './interfaces/star';
import IShip from './interfaces/ship';
import IGameUnit from './interfaces/game-unit';
import GameSettingsService from './services/game-settings.service'
import StarService from './services/star.service';
import ShipService from './services/ship.service';
import GameService from './services/game.service';

const SPACESHIP_DIRECTIVES: any[] = [
    SpaceShipGameComponent
];

const SPACESHIP_PROVIDERS: any[] = [
    GameSettingsService,
    StarService,
    ShipService,
    GameService,
];

export {
    //directives
    SPACESHIP_DIRECTIVES,

    //providers
    SPACESHIP_PROVIDERS,

    //components
    SpaceShipGameComponent,

    //interfaces
    IGameSettings,
    IStar,

    //services
    GameSettingsService,
    StarService,
    ShipService,
    GameService,
}
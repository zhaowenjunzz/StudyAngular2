import {Injectable} from '@angular/core';
import IGameSettings from '../interfaces/game-settings';
import {DEFAULT_SETTINGS} from '../data/default-settings'

@Injectable()
export default class GameSettingsService {

    private _settings: IGameSettings;

    constructor() {
        this._settings = {
            starSpeed: DEFAULT_SETTINGS.starSpeed,
            starNumbers: DEFAULT_SETTINGS.starNumbers,
        };
    }

    get defaultSettings(): IGameSettings {
        return this._settings;
    }
}
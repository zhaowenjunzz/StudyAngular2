import IShip from './ship';
import IStar from './star';

interface IGameUnit {
    ship: IShip,
    stars: IStar[],
}

export default IGameUnit;
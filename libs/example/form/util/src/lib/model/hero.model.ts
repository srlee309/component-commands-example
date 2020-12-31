import { HeroPower } from './hero-power.enum';

export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: HeroPower,
    public alterEgo?: string
  ) {}
}

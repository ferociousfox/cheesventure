export class Player {
  health: number = 120;
  goodWeapon: string;
  hasWeapon: boolean = false;
  torch: boolean = false;
  constructor(
    public name: string,
    public history: string,
    public skills: string,
    public hairColor: string,
    public weapon: string
  ) { }

}

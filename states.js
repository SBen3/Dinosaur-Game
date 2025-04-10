import { Dust } from "./dust.js";
const statesNames = {
  idle: 0,
  walk: 1,
  run: 2,
  jump: 3,
  attack: 4,
  hurt: 5,
  die: 6,
};

export class Idle {
  constructor(player) {
    this.player = player;
  }
  inputHandler(input) {
    if (input.keys.includes("Enter")) {
      this.player.setState(statesNames.attack, 1);
    } else if (input.keys.includes("ArrowRight")) {
      this.player.setState(statesNames.run, 2);
    } else if (input.keys.includes("ArrowLeft")) {
      this.player.setState(statesNames.walk, 1);
    } else if (input.keys.includes("ArrowUp")) {
      this.player.setState(statesNames.jump, 1);
    }
  }
  enter() {
    this.player.spriteY = 3;
  }
}
export class Walk {
  constructor(player) {
    this.player = player;
  }
  inputHandler(input) {
    if (input.keys.includes(" ")) {
      this.player.setState(statesNames.idle, 0);
    } else if (input.keys.includes("Enter")) {
      this.player.setState(statesNames.attack, 1);
    } else if (input.keys.includes("ArrowRight")) {
      this.player.setState(statesNames.run, 2);
    } else if (input.keys.includes("ArrowUp")) {
      this.player.setState(statesNames.jump, 1);
    }
  }
  enter() {
    this.player.spriteY = 6;
  }
}
export class Run {
  constructor(player) {
    this.player = player;
  }
  inputHandler(input) {
    if (input.keys.includes(" ")) {
      this.player.setState(statesNames.idle, 0);
    } else if (input.keys.includes("Enter")) {
      this.player.setState(statesNames.attack, 1);
    } else if (input.keys.includes("ArrowRight")) {
      this.player.setState(statesNames.run, 2);
    } else if (
      input.keys.includes("ArrowLeft") ||
      !input.keys.includes("ArrowRight")
    ) {
      this.player.setState(statesNames.walk, 1);
    } else if (input.keys.includes("ArrowUp")) {
      this.player.setState(statesNames.jump, 1);
    }
  }
  enter() {
    this.player.spriteY = 5;
    if (this.player.onGround()) {
      this.player.game.dust.unshift(new Dust(this.player));
    }
  }
}
export class Jump {
  constructor(player) {
    this.player = player;
  }
  inputHandler(input) {
    if (this.player.onGround()) {
      this.player.setState(statesNames.walk, 1);
    } else if (input.keys.includes("Enter")) {
      this.player.setState(statesNames.attack, 1);
    }
  }
  enter() {
    this.player.spriteY = 4;
  }
}
export class Attack {
  constructor(player) {
    this.player = player;
  }
  inputHandler(input) {
    if (input.keys.includes(" ")) {
      this.player.setState(statesNames.idle, 0);
    } else if (
      input.keys.includes("ArrowRight") ||
      input.keys.includes("ArrowLeft") ||
      !input.keys.includes("Enter")
    ) {
      this.player.setState(statesNames.walk, 1);
    } else if (input.keys.includes("ArrowUp")) {
      this.player.setState(statesNames.jump, 1);
    }
  }
  enter() {
    this.player.spriteY = 0;
  }
}
export class Hurt {
  constructor(player) {
    this.player = player;
  }
  inputHandler() {
    if (this.player.spriteX >= this.player.setFrame) {
      this.player.setState(statesNames.walk, 1);
    }
  }
  enter() {
    this.player.spriteY = 2;
  }
}

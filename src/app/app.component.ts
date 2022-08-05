import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tour-of-hero-what-else';

  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  addAquaticCreatures(newAquaticCreature: string) {
    this.aquaticCreatures.push(newAquaticCreature);
    // this.aquaticCreatures = [...this.aquaticCreatures, newAquaticCreature];
  }
}

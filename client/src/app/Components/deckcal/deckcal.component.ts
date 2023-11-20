import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckmountService } from '../../Services/deckmount.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeckMount } from '../../Models/deckmount.model';

@Component({
  selector: 'app-deckcal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [DeckmountService],
  templateUrl: './deckcal.component.html',
  styleUrl: './deckcal.component.scss',
})
export class DeckcalComponent {
  constructor(private deckMountService: DeckmountService) {}

  deckMount?: DeckMount;

  measurementForm = new FormGroup({
    row: new FormControl('', Validators.required),
    roh: new FormControl('', Validators.required),
  });

  submitted = false;
  showMenu = false;
  showDeckSize = false;
  customDeck = false;

  onSubmit() {
    this.submitted = true;
    this.showMenu = !this.showMenu;

    let roh = Number(this.measurementForm.value.roh);
    let row = Number(this.measurementForm.value.row);

    this.whichDeck(row, roh);
    console.log(this.whichDeck(row, roh));
    this.measurementForm.reset();
    this.showDeckSize = false;
  }

  onReset() {
    this.customDeck = false;
    this.submitted = true;
    this.showMenu = !this.showMenu;
    this.showDeckSize = false;
  }

  whichDeck(a: any, b: any) {
    if (a >= 14.25 && a <= 14.75 && b >= 45.5 && b <= 46) {
      this.deckMountService.get(1).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 20.75 && a <= 21.25 && b === 26.875) {
      this.deckMountService.get(2).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 20.75 && a <= 21.25 && b === 37.875) {
      this.deckMountService.get(3).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 20.75 && a <= 21.25 && b === 45.75) {
      this.deckMountService.get(4).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 20.75 && a <= 21.25 && b === 54.4375) {
      this.deckMountService.get(5).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 20.75 && a <= 21.25 && b === 70.25) {
      this.deckMountService.get(6).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 22.5 && b === 22.9375) {
      this.deckMountService.get(7).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 22.5 && b === 45.75) {
      this.deckMountService.get(8).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 30.0625 && b === 30) {
      this.deckMountService.get(9).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 30.0625 && b === 37.875) {
      this.deckMountService.get(10).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 30.0625 && b === 45.75) {
      this.deckMountService.get(11).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 30.0625 && b === 54.4375) {
      this.deckMountService.get(12).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 44.25 && b === 26.875) {
      this.deckMountService.get(13).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a === 44.25 && b === 45.75) {
      this.deckMountService.get(14).subscribe({
        next: (data) => {
          this.deckMount = data;
          console.log(data);
          this.showDeckSize = true;
        },
        error: (e) => console.error(e),
      });
    } else {
      this.customDeck = true;
    }
  }
}

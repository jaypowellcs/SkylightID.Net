import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfService } from '../../Services/self.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelfFlashed } from '../../Models/selfflash.mount';

@Component({
  selector: 'app-selfcal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [SelfService],
  templateUrl: './selfcal.component.html',
  styleUrl: './selfcal.component.scss',
})
export class SelfcalComponent {
  constructor(private selfService: SelfService) {}

  selfFlash?: SelfFlashed;

  measurementForm = new FormGroup({
    row: new FormControl('', Validators.required),
    roh: new FormControl('', Validators.required),
  });

  submitted = false;
  showMenu = false;
  showSelfSize = false;
  customSelf = false;

  onSubmit() {
    this.submitted = true;
    this.showMenu = !this.showMenu;

    let roh = Number(this.measurementForm.value.roh);
    let row = Number(this.measurementForm.value.row);

    this.whichSelf(row, roh);
    console.log(this.whichSelf(row, roh));
    this.measurementForm.reset();
    this.showSelfSize = false;
  }

  onReset() {
    this.customSelf = false;
    this.submitted = true;
    this.showMenu = !this.showMenu;
    this.showSelfSize = false;
  }

  whichSelf(a: number, b: number) {
    if (a >= 21.5 && a <= 23 && b >= 21.5 && b <= 23) {
      this.selfService.get(1).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 21.5 && a <= 23 && b >= 29.5 && b <= 31) {
      this.selfService.get(2).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 21.5 && a <= 23 && b >= 45.5 && b <= 47) {
      this.selfService.get(3).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 29.5 && a <= 31 && b >= 29.5 && b <= 31) {
      this.selfService.get(4).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 29.5 && a <= 31 && b >= 45.5 && b <= 47) {
      this.selfService.get(5).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 45.5 && a <= 47 && b >= 45.5 && b <= 47) {
      this.selfService.get(6).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else {
      this.customSelf = true;
    }
  }
}

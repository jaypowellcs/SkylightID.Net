import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurbmountService } from '../../Services/curbmount.service';
import { CurbMount } from '../../Models/curbmount.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-curbcal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CurbmountService],
  templateUrl: './curbcal.component.html',
  styleUrl: './curbcal.component.scss'
})
export class CurbcalComponent {


  constructor(private curbMountService: CurbmountService) {}

  curbMount?: CurbMount;

  measurementForm = new FormGroup({
    ocdw: new FormControl('', Validators.required),
    ocdh: new FormControl('', Validators.required),
  });

  submitted = false;
  showMenu = false;
  showCurbSize = false; 
  customCurb = false; 


  onSubmit() {
    this.submitted = true;
    this.showMenu = !this.showMenu;
    
    let ocdh = Number(this.measurementForm.value.ocdh);
    let ocdw = Number(this.measurementForm.value.ocdw);
    
    this.whichCurb(ocdw, ocdh);
    console.log(this.whichCurb(ocdw, ocdh)); 
    this.measurementForm.reset();
    this.showCurbSize = false;
  }

  onReset() {
    this.customCurb = false; 
    this.submitted = true;
    this.showMenu = !this.showMenu;
    this.showCurbSize = false;
  }

  whichCurb(a: any, b: any) {
    if (a >= 16 && a <= 18.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(1).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 16 && a <= 18.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(2).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 24 && b <= 26.25) {
      this.curbMountService.get(3).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(4).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 36 && b <= 38.25) {
      this.curbMountService.get(5).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(6).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 72 && b <= 74.25) {
      this.curbMountService.get(7).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(8).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(9).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 57 && b <= 59.25) {
      this.curbMountService.get(10).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 36 && a <= 38.25 && b >= 36 && b <= 38.25) {
      this.curbMountService.get(11).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 36 && a <= 38.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(12).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    }else if (a >= 48 && a <= 50.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(13).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 48 && a <= 50.25 && b >= 74 && b <= 76.25) {
      this.curbMountService.get(14).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else {
      this.customCurb = true; 
    }
  } 
}

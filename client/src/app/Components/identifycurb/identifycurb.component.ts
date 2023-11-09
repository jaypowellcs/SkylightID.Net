import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurbMount } from '../../Models/curbmount.model';
import { CurbmountService } from '../../Services/curbmount.service';

@Component({
  selector: 'app-identifycurb',
  standalone: true,
  imports: [CommonModule],
  providers: [CurbmountService],
  templateUrl: './identifycurb.component.html',
  styleUrl: './identifycurb.component.scss',
})
export class IdentifycurbComponent implements OnInit {
  curbMount: CurbMount[] | undefined;

  constructor(private curbMountService: CurbmountService) {}

  ngOnInit(): void {
    this.curbMountService.getAll().subscribe({
      next: (data) => {
        this.curbMount = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}

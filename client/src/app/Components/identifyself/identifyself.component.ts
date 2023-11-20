import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfService } from '../../Services/self.service';
import { SelfFlashed } from '../../Models/selfflash.mount';

@Component({
  selector: 'app-identifyself',
  standalone: true,
  imports: [CommonModule],
  providers: [SelfService],
  templateUrl: './identifyself.component.html',
  styleUrl: './identifyself.component.scss'
})
export class IdentifyselfComponent implements OnInit {
 selfFlashed: SelfFlashed[] | undefined;
  

  constructor(private selfService: SelfService) {}

  ngOnInit(): void {
    this.selfService.getAll().subscribe({
      next: (data) => {
        this.selfFlashed = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}

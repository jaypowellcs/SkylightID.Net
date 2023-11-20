import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckmountService } from '../../Services/deckmount.service';
import { DeckMount } from '../../Models/deckmount.model';

@Component({
  selector: 'app-identifydeck',
  standalone: true,
  imports: [CommonModule],
  providers: [DeckmountService],
  templateUrl: './identifydeck.component.html',
  styleUrl: './identifydeck.component.scss'
})
export class IdentifydeckComponent implements OnInit{
  deckMount: DeckMount[] | undefined;
  

  constructor(private deckMountService: DeckmountService) {}

  ngOnInit(): void {
    this.deckMountService.getAll().subscribe({
      next: (data) => {
        this.deckMount = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}

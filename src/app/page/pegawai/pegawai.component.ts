import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-pegawai',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatMenu,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatMenuTrigger,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './pegawai.component.html',
  styleUrl: './pegawai.component.css'
})
export class PegawaiComponent {

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  player: any = {};

  constructor(private http: HttpClient) {}

  addPlayer(): void {
    this.http.post('http://localhost:3000/players', this.player).subscribe(
      () => {
        alert('Player added successfully!');
        this.resetForm();
      },
      (error) => {
        console.log('Error adding player:', error);
      }
    );
  }

  resetForm(): void {
    this.player = {};
  }
}

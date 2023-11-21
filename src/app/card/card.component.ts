import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: String = "Soy el titulo generico"
  @Input() img: String = "Soy la imagen generica"
  @Input() description: String = "";
  @Input() link: String = "Soy el link generico"
  @Input() style_button: String = "btn btn-primary"
}

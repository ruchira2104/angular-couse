import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-image',
  // standalone: true,
  // imports: [],
  templateUrl: './content-image.component.html',
  styleUrl: './content-image.component.css'
})
export class ContentImageComponent {

  @Input()
  imageUrl:string;
}

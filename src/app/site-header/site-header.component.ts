import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  ngOnInit(): void {
    const button = document.querySelector('.button');
    const navMenu = document.querySelector('.nav__menu');

    button?.addEventListener('click', () => {
      button.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });
  }
}


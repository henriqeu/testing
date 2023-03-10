import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aplicativo de teste';

  isLoadingApp = true;
  isLoadingCatalog = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.isLoadingApp = true;
  }

  toRoute(route:any) {

    if(route === 'catalog' ) {
      this.isLoadingApp = false;
    }

    if(route === '' ) {
      this.isLoadingApp = true;
      this.isLoadingCatalog = false;
    }
  }
}

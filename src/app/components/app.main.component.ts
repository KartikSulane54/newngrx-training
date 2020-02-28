import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
      <h1>The NGRX Application</h1>
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <a [routerLink]="['']">Product List</a>
          </td>
        </tr>
      </table>
      <br/>
      <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

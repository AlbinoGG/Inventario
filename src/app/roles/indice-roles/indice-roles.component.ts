import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-indice-roles',
  templateUrl: './indice-roles.component.html',
  styleUrls: ['./indice-roles.component.css']
})
export class IndiceRolesComponent implements OnInit {

  constructor(private rolesServices : RolesService) { }

  ngOnInit(): void {

    this.rolesServices.ObetnerTodos().subscribe({
      next : (roles) => {
        console.log(roles)
      },

      error: (error) => {
        console.error(error)
      }
    })
  }
}

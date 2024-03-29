import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
})
export class SidebarComponent implements OnInit {
  public sidebarVisible = false;

  public items: MenuItem[] | undefined;

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Administrador',
        icon: 'pi pi-database',
        routerLink: 'administrador/lista-funcionarios',
      },

      {
        label: 'Funcionários',
        icon: 'pi pi-user',
        routerLink: '/funcionarios/funcionario-perfil',
      },
    ];
  }

  public toogleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

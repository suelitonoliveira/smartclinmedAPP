import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Agenda', url: '/folder/Agenda', icon: 'calendar-number' },
    { title: 'Paciente', url: '/folder/Paciente', icon:"person" },
    { title: 'Profissionais', url: '/folder/Profissionais', icon: 'people' },
    { title: 'Resultado de Exames', url: '/folder/Resultado de Exames', icon: 'archive' },
    { title: 'Convênio', url: '/folder/Convênio', icon: 'briefcase' },
    { title: 'Pagamento', url: '/folder/Pagamento', icon: 'card' },
  ];
  public labels = ['Pacientes', 'Consultas', 'Anotações', 'Avisos', 'Restrições', 'Convênios'];
  constructor() {}
}

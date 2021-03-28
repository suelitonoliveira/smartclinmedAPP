import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PacienteDTO } from "src/models/paciente.dto";

@Injectable()
export class PacienteService{


    constructor(public http: HttpClient){

    }

    findAll() :Observable<PacienteDTO[]> {
        return this.http.get<PacienteDTO[]>('${API_CONFIG.baseUrl}/pacientes');
    }

}
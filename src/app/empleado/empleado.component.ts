import { Component } from "@angular/core";
import {Empleado} from "./empleado"; 
@Component({
selector: "empleado-tag",
templateUrl: "./empleado.component.html"

})
export class EmpleadoComponent {

    public titulo = "Componente empleados";
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    constructor(){
    this.empleado = new Empleado("Mimoso",5,"mascota",true);

    this.trabajadores =[
         new Empleado("Edgar",20,"Estudiante",false),
         new Empleado("MANOLO",20,"cocinero",true),
         new Empleado("Ana",20,"administrativo",false),
    ];
    this.trabajador_externo= true;

    }
    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
    cambiarExterno(valor){
        this.trabajador_externo= valor;
    }


}
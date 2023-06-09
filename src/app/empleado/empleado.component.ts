import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //poner css in line tambien se pude con html
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent {

  nombre = "Mariana";

  apellido = "Correa";

  edad = 8;

  //empresa = "Meli";

  //getEdad(){
  //  return this.edad;
  //}

  //metodo llamaEmpresa

  //llamaEmpresa(value:String){
//
  //}
enableProperti = false;
userRegister = false;
getRegisterUser(){
  this.userRegister = false;
}
serRegisterUser(){
  alert("El usuario se registro correctamente")
}
}

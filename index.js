const botonResultado = document.querySelector("#btnResultado");

botonResultado.addEventListener("click",function(){
    {
      const horas = document.getElementById("horas").value;
      const vhora = document.getElementById('vhora').value;
      const mostrar = document.querySelector("#resultado");
      const mostrar1 = document.querySelector("#resultado1");
      const mostrar2 = document.querySelector("#resultado2");
      const mostrar3 = document.querySelector("#resultado3");
      const mostrar4 = document.querySelector("#resultado4");
      const Img = document.querySelector("#img").src="./img/user.jpg";
      const totSueldoBruto= parseFloat(vhora)*parseFloat(horas);
      const pencion = parseFloat(totSueldoBruto * .04);
      const salud = parseFloat(totSueldoBruto * 0.04);
      const totSueldoNeto = parseFloat(totSueldoBruto-pencion-salud);
      const salarioQuincenal=parseFloat(totSueldoNeto/2);

      if(horas<48){
      
          mostrar.textContent="No tienes suficientes horas lavoradas minimo son 48 horas";
          mostrar1.textContent = "";
          mostrar2.textContent = "";
          mostrar3.textContent = "";
          mostrar4.textContent ="";
            
          
      }
      else if(horas>198){
          mostrar.textContent="Demasiadas horas lavoradas";
          mostrar1.textContent = "";
          mostrar2.textContent = "";
          mostrar3.textContent = "";
          mostrar4.textContent = "";
          
      }
      else{
          mostrar.textContent="Su salario bruto es: "+totSueldoBruto;
          mostrar1.textContent="Su aporte pension es: "+pencion;
          mostrar2.textContent = "Su aporte salud es: " + salud;
          mostrar3.textContent ="Su sueldo  neto es: "+salarioQuincenal;
          mostrar4.textContent = "Su sueldo mensual neto es: "+totSueldoNeto;
      }


    }
})
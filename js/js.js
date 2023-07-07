class CPersona {
    constructor(nombre, FN, DNI, genero, peso, altura) {
      this.nombre = nombre;
      this.FN = FN;
      this.DNI = DNI;
      this.genero = genero;
      this.peso = peso;
      this.altura = altura;
    }
  
    IMC() {
      const imc = this.peso / (this.altura ** 2);
      let v = 0;
      if (imc < 20) {
        v = -1;
      } else if (imc >= 20 && imc <= 25) {
        v = 0;
      } else {
        v = 1;
      }
      return v;
    }
  
    esMayorDeEdad() {
      const FA = new Date();
      const FN = new Date(this.FN);
      const edad = FA.getFullYear() - FN.getFullYear();
      return edad >= 18;
    }
  
    ComprobarGenero() {
      const generosvalidos = ['H', 'M', 'O'];
      if (!generosvalidos.includes(this.genero)) {
        this.genero = 'H';
      } 
    }
  }
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const nombre = document.getElementById('nombre').value;
    const FN = document.getElementById('FN').value;
    const DNI = document.getElementById('DNI').value;
    const genero = document.getElementById('genero').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const persona = new CPersona(nombre, FN, DNI, genero, peso, altura);
    persona.ComprobarGenero();
    document.getElementById('datoNombre').textContent = persona.nombre;
    document.getElementById('datoFN').textContent = persona.FN;
    document.getElementById('datoDNI').textContent = persona.DNI;
    document.getElementById('datoGenero').textContent = persona.genero;
    document.getElementById('datoPeso').textContent = persona.peso;
    document.getElementById('datoAltura').textContent = persona.altura;
    document.getElementById('datoIMC').textContent = persona.IMC();
    document.getElementById('datoME').textContent = persona.esMayorDeEdad();
  })
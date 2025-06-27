const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  let titulo = `<section>
                <p>${pregunta.titulo}</p>
                </section>`
  return titulo;
}

function imprimeTodasLasRespuestas(pregunta) {
  let resp = '';
  for(let i= 0; i<pregunta.respuestas.length; i++){
    resp += imprimeUnaRespuesta(pregunta.respuestas[i])
  }
  return resp;
}

function imprimeUnaRespuesta(respuesta) {
  let resp = '<section>'
  resp += imprimeLabel(respuesta);
  resp += imprimeInput(respuesta);
  resp += '</section>'
  
  return resp;
}

function imprimeLabel(respuesta) {
  let label =`
    <label for='${respuesta.id}'>--${respuesta.label}--</label>`

  return label;
}

function imprimeInput(respuesta) {
  let input =`
    <input type='radio' id='${respuesta.id}' name='${respuesta.name}' value='${respuesta.value}'>
            `
  return input;
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
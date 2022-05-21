function adicionarTarefa() {
  let texto_tarefa = document.getElementById("campo").value
  if(texto_tarefa) {
    let lista = document.getElementById("lista")
    html_texto = `<div class="tarefa row"><input type='checkbox' name='${texto_tarefa}' id='${texto_tarefa}'><label for="${texto_tarefa}">${texto_tarefa}</label></div>`
    lista.insertAdjacentHTML('beforeend', html_texto)
    document.getElementById("campo").value = ""
  }
}
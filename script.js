function toggleMode() {
  //acessar o documento html
  const html = document.documentElement
  //inserir a classe light no elemento html
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add ('light')
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}

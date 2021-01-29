const Modal = {
  open(){
    // todo objeto tem propriedades e funcionalidades
    document
      .querySelector('.modal-overlay')//funcionalidade
      .classList//propriedade
      .add('active');
  },
  close(){
    document.querySelector('.modal-overlay').classList.remove('active');
  }
}


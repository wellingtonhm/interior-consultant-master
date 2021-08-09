function esconderMenu(){
    Document.getElementsByClassName("menu-site").classList.add('show');
};

Document.getElementsByClassName("material-icons menu-hamburger").onclick = esconderMenu();
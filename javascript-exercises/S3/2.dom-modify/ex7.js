let eliminados$$ = document.querySelectorAll("p.fn-remove-me")//selecciono los p con clase fn-remo... y los almaceno en la variable eliminados$$
eliminados$$.forEach(function(elemento) {//paso la info de eliminados$$ y la recorro con forEach 
    elemento.remove();//cojo el argumento elemento y le aplico la funciópn remove para que elimine los p.fn-remo...
});
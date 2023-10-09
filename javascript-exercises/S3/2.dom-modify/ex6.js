const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista$$ = document.createElement('ul');
for(let i = 0; i < apps.length; i++){
    let app = apps[i];
    let li$$ = document.createElement('li');
    li$$.textContent = app;
    lista$$.appendChild(li$$);
}
document.body.appendChild(lista$$);


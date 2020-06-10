var listElement = document.querySelector('#app ul'); // Referencia ao element ul
var inputElement = document.querySelector('#app input'); // Referencia ao elemento input
var buttonElement = document.querySelector('#app button'); // Referencia ao elemento button

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // Array onde serão armazenadas 'todos'

// Função para apagar li's e depois criar li's
function renderTodos() {
    listElement.innerHTML = ''; // Limpa elementos li

    for (todo of todos) { // Percorre array
        var todoElement = document.createElement('li'); // Cria elemento li
        var todoText = document.createTextNode(todo); // Cria elemento de texto com cada elemento da array

        todoElement.appendChild(todoText); // Passa o elemento de texto para dentro da li
        listElement.appendChild(todoElement); // Passa li para dentro de ul


        var linkElement = document.createElement('a'); // Cria elemento a
        linkElement.setAttribute('href', '#'); // Adiciona atributos para o elemento a


        var linkText = document.createTextNode('Excluir'); // Cria elemento de texto para a

        todoElement.appendChild(linkElement); // Passa 'a' para dentro da li
        linkElement.appendChild(linkText); // Passa o texto para dentro do elemento link 'a'

        var pos = todos.indexOf(todo); // Retorna a posição atual do valor
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')') // Adiciona atributo onclick para o link
    }
}

renderTodos(); // Usando função para exemplo de 'todos'S

// Função para adicionar 'todo'
function addTodo() {
    var todoText = inputElement.value; // Recebe o valor do input em uma variavel

    todos.push(todoText); // Coloca um novo elemento no array 'todos'
    inputElement.value = ''; // Apaga o valor do input
    renderTodos() // Renderiza nossa lista 'todos'
    saveToStorage();
}

buttonElement.onclick = addTodo; // Habilita função ao clicar em nosso butão

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

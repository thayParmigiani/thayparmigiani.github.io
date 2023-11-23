/* Função para peenchimento automático do dropdown de dias
conforme o mês slecionado */

function updateDays() {
    // Identifica o mês selecionado
    var selectedMonth = document.getElementById("meses").value;
    
    // Verifica quantos dias tem no mês
    var daysInMonth = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();

    // Seleciona o dropdown de dias
    var daysDropdown = document.getElementById("dias");

    // Limpa valores existentes
    daysDropdown.innerHTML = "";

    //Adiciona opção padrão
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Escolha o dia";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    daysDropdown.appendChild(defaultOption);

    // Popula o dropdown de dias
    for (var i = 1; i <= daysInMonth; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      daysDropdown.appendChild(option);
    }
  }

  // Inicializa o dropdown ao carregar a página
  updateDays();
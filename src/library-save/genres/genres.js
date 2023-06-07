// Открытие жанров
document.querySelector('.dropdown_button').addEventListener('click', function() {
    document.querySelector('.dropdown_list').classList.toggle('dropdown_list--visible');
    this.classList.add('dropdown_button--active');
});

// Закрытие когда выбираешь что-то из списка
document.addEventListener("DOMContentLoaded", function() {
    var dropdownOptions = document.querySelectorAll(".dropdown_item");
    for (var i = 0; i < dropdownOptions.length; i++) {
      dropdownOptions[i].addEventListener("click", function() {
        var dropdown = this.closest(".dropdown");
        dropdown.querySelector(".dropdown_button").textContent = this.textContent;
        dropdown.querySelector(".dropdown_list").style.display = "none";
      });
    }
  });



// Закрытие на клик в другой области
document.addEventListener('click', function(e){
    if (e.target !== document.querySelector('.dropdown_button')) {
        document.querySelector('.dropdown_list').classList.remove('dropdown_list--visible');
    }
})

// Закрытие на кнопку Esc
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
        document.querySelector('.dropdown_list').classList.remove('dropdown_list--visible');
    }
})

// Замена строки Genre на ВЫБРАННУЮ
document.querySelectorAll('.dropdown_item').forEach(function(listItem){
    listItem.addEventListener('click',function(e){
        e.stopPropagation();
        document.querySelector('.dropdown_button').innerText = this.innerText;
        document.querySelector('.dropdown_button').focus();
    })
})

// Сортировка по жанрам 
const filterBox = document.querySelectorAll('.box');
document.querySelector('.dropdown').addEventListener('click', function(e) {
    if (e.target.tagName !== 'LI') return false;

    let filterClass = e.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!=='genre') {
            elem.classList.add('hide');
        }
    })
})

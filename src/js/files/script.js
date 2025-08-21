// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const btnSearch = document.querySelector(".btn-search[type='button']");
const searchForm = document.querySelector(".header__search");

if (btnSearch && searchForm) {
	btnSearch.addEventListener("click", (e) => {
		e.stopPropagation(); // предотвращаем всплытие, чтобы событие не сработало на документе
		searchForm.classList.toggle("_active");
	});

	// Закрываем форму при клике вне области поиска и кнопки
	document.addEventListener("click", (e) => {
		if (searchForm.classList.contains("_active") && !searchForm.contains(e.target) && e.target !== btnSearch) {
			searchForm.classList.remove("_active");
		}
	});
}

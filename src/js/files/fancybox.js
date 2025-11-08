import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Галерея Fancybox =================================
Fancybox.bind('[data-fancybox="gallery"]', {});

// Popup Fancybox =================================
const btnCall = document.querySelectorAll("[data-call]");
btnCall.forEach((btn) => {
	btn.addEventListener("click", () => {
		Fancybox.show([{ src: "#call", type: "inline" }]);
	});
});

const btnReviews = document.querySelectorAll("[data-reviews]");
btnReviews.forEach((btn) => {
	btn.addEventListener("click", () => {
		Fancybox.show([{ src: "#reviews", type: "inline" }]);
	});
});

const btnService = document.querySelectorAll("[data-service]");
const popup = document.querySelector("#service");
const spanName = popup.querySelector(".name");
const hiddenInput = popup.querySelector('input[name="service_name"]');

btnService.forEach((btn) => {
	btn.addEventListener("click", () => {
		const serviceName = btn.dataset.name;
		spanName.textContent = serviceName;
		hiddenInput.value = serviceName;
		Fancybox.show([{ src: "#service", type: "inline" }]);
	});
});

const btnProduct = document.querySelectorAll("[data-product]");
const popupProduct = document.querySelector("#product");
const nameProduct = popupProduct.querySelector(".name");
const hiddenName = popupProduct.querySelector('input[name="product_name"]');

btnProduct.forEach((btn) => {
	btn.addEventListener("click", () => {
		const productName = btn.dataset.name;
		nameProduct.textContent = productName;
		hiddenName.value = productName;
		Fancybox.show([{ src: "#product", type: "inline" }]);
	});
});

// Popup успешной отправки формы
export function showSuccessPopup() {
	// Закрываем текущее модальное окно (если открыто)
	Fancybox.close();

	// Показываем попап с id="success"
	Fancybox.show([
		{
			src: "#success",
			type: "inline",
		},
	]);

	setTimeout(() => {
		Fancybox.close();
	}, 3000);
}

window.showSuccessPopup = showSuccessPopup;

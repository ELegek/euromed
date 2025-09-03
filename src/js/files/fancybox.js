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
window.addEventListener(
	"wpcf7mailsent",
	function (event) {
		Fancybox.close();
		Fancybox.show([{ src: "#success", type: "inline" }]);
	},
	false
);

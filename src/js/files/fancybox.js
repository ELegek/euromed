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

// Popup успешной отправки формы
window.addEventListener(
	"wpcf7mailsent",
	function (event) {
		Fancybox.close();
		Fancybox.show([{ src: "#feedback-success", type: "inline" }]);
	},
	false
);

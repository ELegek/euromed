import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const rowsServices = document.querySelectorAll(".main-services__body");
const rowsTrust = document.querySelectorAll(".trust__body");
const rowsCase = document.querySelectorAll(".main-case__body");
const rowsDocuments = document.querySelectorAll(".legal-documents__body");
const rowsСertificates = document.querySelectorAll(".certificates__body");
const rowsСatalog = document.querySelectorAll(".catalog__body");
// Берём все карточки в контейнере
rowsServices.forEach((row) => {
	gsap.from(row.querySelectorAll(".main-services__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});
// Берём все карточки в контейнере
rowsTrust.forEach((row) => {
	gsap.from(row.querySelectorAll(".trust__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});
// Берём все карточки в контейнере
rowsCase.forEach((row) => {
	gsap.from(row.querySelectorAll(".case__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});
// Берём все карточки в контейнере
rowsDocuments.forEach((row) => {
	gsap.from(row.querySelectorAll(".legal-documents__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});
// Берём все карточки в контейнере
rowsСertificates.forEach((row) => {
	gsap.from(row.querySelectorAll(".certificates__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});
// Берём все карточки в контейнере
rowsСatalog.forEach((row) => {
	gsap.from(row.querySelectorAll(".catalog__item"), {
		opacity: 0,
		y: 40,
		duration: 0.8,
		ease: "power2.out",
		stagger: 0.2, // задержка между карточками
		scrollTrigger: {
			trigger: row,
			start: "top 80%", // запуск когда верх контейнера попадает в зону видимости
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".expert-card").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 90%",
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".reviews__item").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 90%",
			toggleActions: "play none none reverse",
		},
	});
});
document.querySelectorAll(".equipment__item").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".sales__item").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".card").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".blog__item").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});

document.querySelectorAll(".service__item").forEach((item) => {
	gsap.from(item, {
		opacity: 0,
		y: 50, // смещение снизу
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: item,
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});

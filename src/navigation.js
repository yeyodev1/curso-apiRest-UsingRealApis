const navigator = () => {
	console.log({ location });

	if (location.hash.startsWith("#trends")) {
		trendsPage();
	} else if (location.hash.startsWith("#search=")) {
		searchPage();
	} else if (location.hash.startsWith("#movie=")) {
		movieDetailsPage();
	} else if (location.hash.startsWith("#category=")) {
		categoriesPage();
	} else {
		console.log("Home!!");
		homePage();
	}
};

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

const homePage = () => {
	console.log("Home!!");
	getTrendingPreview();
	getCategoriesPreview();
};
const categoriesPage = () => {
	console.log("estamos en categoriassssss!!");
};
const movieDetailsPage = () => {
	console.log("estamos en moviesssss!!");
};
const searchPage = () => {
	console.log("estamos en busquedaaa!!");
};
const trendsPage = () => {
	console.log("estamos en trends!!");
};

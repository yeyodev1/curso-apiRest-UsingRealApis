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

searchFormBtn.addEventListener("click", () => {
	location.hash = "#search=";
});
trendingBtn.addEventListener("click", () => {
	location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
	location.hash = "#home";
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

const homePage = () => {
	console.log("Home!!");

	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.add("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.remove("inactive");
	headerCategoryTitle.classList.add("inactive");
	searchForm.classList.remove("inactive");

	trendingPreviewSection.classList.remove("inactive");
	categoriesPreviewSection.classList.remove("inactive");
	genericSection.classList.add("inactive");
	movieDetailSection.classList.add("inactive");

	getTrendingPreview();
	getCategoriesPreview();
};
const categoriesPage = () => {
	console.log("estamos en categoriassssss!!");

	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.remove("inactive");
	headerCategoryTitle.classList.add("inactive");
	searchForm.classList.add("inactive");

	trendingPreviewSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	movieDetailSection.classList.add("inactive");

	const [_, categoryData] = location.hash.split("=");
	const [categoryId, categoryName] = categoryData.split("-");

	getMoviesByCategory(categoryId);
};
const movieDetailsPage = () => {
	console.log("estamos en moviesssss!!");

	headerSection.classList.add("header-container--long");
	// headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.add("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.add("inactive");
	searchForm.classList.add("inactive");

	trendingPreviewSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	genericSection.classList.add("inactive");
	movieDetailSection.classList.remove("inactive");
};
const searchPage = () => {
	console.log("estamos en busquedaaa!!");

	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.remove("inactive");
	searchForm.classList.remove("inactive");

	trendingPreviewSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	movieDetailSection.classList.add("inactive");
};
const trendsPage = () => {
	console.log("estamos en trends!!");

	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.remove("inactive");
	searchForm.classList.add("inactive");

	trendingPreviewSection.classList.add("inactive");
	categoriesPreviewSection.classList.add("inactive");
	genericSection.classList.remove("inactive");
	movieDetailSection.classList.add("inactive");
};

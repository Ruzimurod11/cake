class Products {
	render() {
		let htmlCatalog = '';
		CATALOG.forEach(({ title, text, img }) => {
			htmlCatalog += `
				<div class="practice__column">
					<article class="practice__item item-practice">
						<div class="item-practice__content">
							<a href="" class="item-practice__link">
								<h4 class="item-practice__title">${title}</h4>
							</a>
							<div class="item-practice__text">
								${text}
							</div>
						</div>
						<a href="" class="item-practice__image __ibg">
							<img
								src="${img}"
								alt="A single source of truth"
							/>
						</a>
					</article>
				</div>
			`;
		});
		ROOT_PRODUCTS.innerHTML = htmlCatalog;
	}
}

const productsPage = new Products();
productsPage.render();

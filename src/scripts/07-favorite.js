/*-------------------------------
------- favorite
-------------------------------*/

const addToFavorite = (ProductObject) => {
  if (localStorage.getItem('favorite') == null) {
    const favoriteArray = [];
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const favorite = JSON.parse(localStorage.getItem('favorite'));
  let productExist = false;
  for (const item of favorite) {
    if (
      ProductObject.category == item.category &&
      ProductObject.id == item.id
    ) {
      productExist = true;
    }
  }

  if (!productExist) {
    favorite.push(ProductObject);
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }
};

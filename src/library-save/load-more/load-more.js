async function onClickBtnLoadMore() {
    page += 1;
    let request = refs.form.elements.searchQuery.value.trim();
  
    try {
      const galleryItems = await fetchImages(request, page);
      let showPages = galleryItems.data.totalHits / perPage;
  
      if (showPages <= page) {
        hideBtnLoadMore();
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }
  
      renderGalleryMarkup(galleryItems.data.hits);
    } catch (error) {
      Notify.failure(
        'Sorry, there are no films added in your favourites. Please try again.'
      );
    }
    lightbox.refresh();
  }
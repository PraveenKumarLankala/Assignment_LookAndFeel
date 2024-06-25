function removeCard(element) {
    // Find the closest parent .col-12 (or the specific column class you're using) and remove it
    element.closest('.col-12').remove();
}

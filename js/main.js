function searchNow(){

    const q =
    document.getElementById('search')
    .value
    .trim();

    if(!q) return;

    location.href =
    'search.html?q=' +
    encodeURIComponent(q);

}

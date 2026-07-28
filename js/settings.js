function resetData(){

    localStorage.clear();

    alert(
        'データを初期化しました'
    );

}

function toggleDarkMode(){

    document.body.classList.toggle(
        'dark'
    );

}

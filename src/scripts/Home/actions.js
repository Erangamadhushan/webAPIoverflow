function explorerAPIContent(apiname) {
    console.log(apiname);
    //window.alert(apiname);
    let api = apiname;
    sessionStorage.setItem('currentAPI',JSON.stringify(api));
}
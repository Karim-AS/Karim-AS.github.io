    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
        
function homePageLoading() {
    url = 'https://api.blockcypher.com/v1/btc/main';
    elementID = 'https://karim-as.github.io/bitcoin/';
    fonctionRequeteApi(url, elementID);
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();
}



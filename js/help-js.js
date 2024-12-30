function search_site()
{
var url = document.getElementById("search").value
url = url + document.search_form.u_search.value;
window.location.href = url;
}
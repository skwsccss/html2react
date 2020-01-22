function changeTheme(themeName) {   
    var links = $("head link[href*='css/dist']");
    //console.log(links);
    links.each(function (index, element) {
        //console.log($(this).attr("href"));
        var res = $(this).attr("href").split("/");
        res[2] = themeName;
        element.href = res.join('/');
        //console.log($(this).attr("href"));
    });
    //$.each(links, function (index, item) {
    //    var res = $(item).attr("href").split("/");
    //    res[2] = themeName;
    //    $(item).attr("href") = res.join('/');
    //});
    //links.forEach(function (item, index) {
   
    //});
    //$("head").find("link").attr("href", function (i, value) {
    //    var n = value.startsWith("css/dist");
    //    if (n) {
    //        var res = value.split("/");
    //        res[2] = themeName;
    //        return res.join('/');
    //    }
    //    else {
    //        return value;
    //    }
    //});
    localStorage.setItem("current_theme", themeName);
}
$(function () {
    var currentTheme = localStorage.getItem("current_theme");
    if (currentTheme) {
        changeTheme(currentTheme);
    }
});
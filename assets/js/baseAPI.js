var baseURL = 'http://api-breakingnews-web.itheima.net'
$.ajaxPrefilter(function(params) {
    params.url = baseURL + params.url
    if (params.url.indexOf("/my/") !== -1) {
        params.headers = {
            Authorization: localStorage.getItem("token") || ""
        }
    }
});
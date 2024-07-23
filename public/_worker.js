
const apiList=['/codelifeApi']




export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    let new_request=null;
    for (let i = 0; i < apiList.length; i++) {
      if (url.pathname.startsWith(apiList[i])) {
        url.hostname = 'api.codelife.cc'
        url.pathname = url.pathname.replace(apiList[i], '');
        new_request = new Request(url, request);
        break;
      }
    }
    if(new_request!==null)
    return fetch(new_request);
    return env.ASSETS.fetch(request);
  },
};
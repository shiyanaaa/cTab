import axios from 'axios';
export const getIconByUrl = (url: string) => {
  return axios.get('/codelifeApi/website/info', {
    params:{
      lang: 'cn',
      url
    }
    
  });
};

import { environment } from '../environments/environment';
// const http = 'http://192.168.43.23:';
const http = 'http://localhost:';
const port = '3000';
// = '3000';

export const Configs = {
    DOMAIN: {
        url: http + port + '/public/avatar/'
    },
    STYLE_IMAGE: {
        profileWidth: 180,
        profileHeight: 180,
        thumnailWidth: 200,
        thumnailHeight: 200,
        image: 'image'
    },
    HOUSE: {
        getPostPutDeleteHouse: http + port + '/api/house',
    },
    DEVICE: {
        getDevicdByIdHouse: http + port + '/api/device',
        headerUrl: 'https://connect.mysmarthome.vn/api/1.0/request/',
        lastUrlOnOffTimer: '/req_timer_block',
        lastUrlOfchangeState: '/req_device_toggle',
        lastUrlOfGetStateDevice: '/req_device',
        lastUrlShowTimer: '/req_timer'
    },
    NODE: {

    },
    USER: {
        token: 'x',
        createUser: http + port + '/api/user',
        updateUser: http + port + '/api/user',
        register: http + port + '/api/user',
        login: http + port + '/api/user/login',
        forgotpassword: http + port + '/api/user/forgotpassword',
        getuserbytoken: http + port + '/api/user',
        deleteUser: http + port + '/api/user',
        active: http + port + '/api/user/activate'
    },
    FILE: {
        uploadfile: http + port + '/api/file/uploadfile',
        uploadimagestorage: http + port + '/api/file/uploadimagestorage',
        getimagestoragebyiD: http + port + '/api/file/getimagestoragebyiD',
        uploadProfile: http + port + '/api/file/upload'
    },
    SOCKET: {
        url: http + port + '/nest',
        urlInut: 'https://socket.mysmarthome.vn'
    },
    AUDIO: {
        list: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/list',
        volume: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/set_volume',
        play: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/play_filename',
        next: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/next',
        prev: 'http://118.69.171.114:8100/api/1.0/data/BkE4H-mhm/prev'
    }
};

import Route from '@ember/routing/route';
import appLayout from '@polymer/app-layout';
import ironIcons from '@polymer/iron-icons';
import paperIconButton from '@polymer/paper-icon-button';
import exPanda from 'ex-panda';
import config from '../config/environment';

window.rebuildOn = function(location){
    window.location = window.location.origin+'/#/'+location;
    window.location.reload();
}

console.log('CONFIG', config);

export default Route.extend({
    model : function(params){
        var route = document.location.pathname.split('/').pop();
        if(!route) route = document.location.hash.split('/').pop();
        return new Promise(function(resolve){
            var origin = 2020;
            var year = (new Date()).getFullYear();
            var simpleTextures = [
                'ash', 'mahogony', 'ebony', 'cherry'
            ];
            setTimeout(function(){
                resolve({
                    currentRoute: route,
                    range : year === origin?year:origin+'-'+year,
                    simple : simpleTextures
                });
            }, 100)
        });
    }
});

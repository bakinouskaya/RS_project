function Atbash(str){

    return str.split('').map(function(elem){return elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90? 
        elem = String.fromCodePoint(155 -(elem.charCodeAt(0))):
        elem.charCodeAt(0) >=97  && elem.charCodeAt(0) <= 122?
        elem = String.fromCodePoint(219 - elem.charCodeAt(0)): elem}).join('');

}

module.exports = { Atbash }

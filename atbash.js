function Atbash(str){
//    console.log('X'.charCodeAt(0));
    return str.split('').map(function(elem){return elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90? elem = String.fromCodePoint(155 -(elem.charCodeAt(0))): elem.charCodeAt(0) >=97  && elem.charCodeAt(0) <= 122? elem = String.fromCodePoint(219 - elem.charCodeAt(0)): elem}).join('');
// 65 - 90
// 97 - 122

}

export { Atbash }
// console.log(Atbash('m'));
function CaesarDecode(str, shift){
   
    return str.split('').map(function(elem){
        return elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90 - shift || elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122 - shift? 
        elem = String.fromCodePoint(elem.charCodeAt(0) + shift): 
        elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) > 90 - shift && elem.charCodeAt(0) <= 90|| elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) > 120 - shift && elem.charCodeAt(0) <= 122? 
        elem = String.fromCodePoint(elem.charCodeAt(0) - 26 + shift): elem}).join('');
// 65 - 90
// 97 - 122
}

function CaesarEncode(str, shift){
    return str.split('').map(function(elem){
        return elem.charCodeAt(0) >= 65 + shift && elem.charCodeAt(0) <= 90|| elem.charCodeAt(0) >= 97 + shift && elem.charCodeAt(0) <= 122? 
        elem = String.fromCodePoint(elem.charCodeAt(0) - shift): 
        elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) >= 65 + shift && elem.charCodeAt(0) <= 90|| elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) >= 97 + shift && elem.charCodeAt(0) <= 122? 
        elem = String.fromCodePoint(elem.charCodeAt(0) + 26 - shift): elem}).join('');
 
}

// console.log(CaesarDecode('a', 6))
export { CaesarDecode, CaesarEncode }

// https://github.com/bakinouskaya/RS_project
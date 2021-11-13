function CaesarDecode(str){
   
    return str.split('').map(function(elem){return elem.charCodeAt(0) > 64 && elem.charCodeAt(0) < 90 || elem.charCodeAt(0) > 96 && elem.charCodeAt(0) < 122? elem = String.fromCodePoint(elem.charCodeAt(0) + 1): elem.charCodeAt(0) == 90 || elem.charCodeAt(0) == 122? elem = String.fromCodePoint(elem.charCodeAt(0) - 25): elem}).join('');
// 65 - 90
// 97 - 122

}

function CaesarEncode(str){
    
    return str.split('').map(function(elem){return elem.charCodeAt(0) > 65 && elem.charCodeAt(0) < 91 || elem.charCodeAt(0) > 97 && elem.charCodeAt(0) < 123? elem = String.fromCodePoint(elem.charCodeAt(0) -1): elem.charCodeAt(0) == 65 || elem.charCodeAt(0) == 97? elem = String.fromCodePoint(elem.charCodeAt(0) + 25): elem}).join('');
// 65 - 90
// 97 - 122

}
// // let text = 'Aa @ 1 2 3 C Zz';
// // let text = process.argv[2];
// // console.log(typeof text);


// // function ROT_8Decode(str){
// //     console.log(str)
   
//     return str.split('').map(function(elem){return elem.charCodeAt(0) > 64 && elem.charCodeAt(0) < 83 || elem.charCodeAt(0) > 96 && elem.charCodeAt(0) < 114? elem = String.fromCodePoint(elem.charCodeAt(0) + 8): elem.charCodeAt(0) == 90? elem = String.fromCodePoint(65):elem.charCodeAt(0) == 122? elem = String.fromCodePoint(97): elem}).join('');
// // 65 - 90
// // 97 - 122

// }

// console.log(text = CaesarDecode(text))


// console.log(CaesarEncode(text))

export { CaesarDecode, CaesarEncode }

// https://github.com/bakinouskaya/RS_project
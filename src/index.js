

function decode(expr) {
   
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };
    
    function decode(expr) {
       
        let String = expr.match(/.{1,10}/g);
        String = String.toString().replace(/\b0+/g, "");
        currstr = "";
        let array = [];
        for (var i = 0; i < String.length; ++i) {
           currstr += expr[i];
     
           if (currstr.length == 2) {
              array.push(currstr);
              
              currstr = "";
           }
        }
        array = String.replace(/\b0+/g, "").replace(/10/g,".").replace(/11/g,'-').replace(/,/g,' ');
        var rep = array.replace(/([.-]+[-.]*)/g, (_, x) => MORSE_TABLE [x]).replace();
        result = rep.replace(/ /g, '').replace(/\*/g, ' ').replace(/          /g, ' '); // write your solution here
        }
    
    
    module.exports = {
        decode
    }}
    
   
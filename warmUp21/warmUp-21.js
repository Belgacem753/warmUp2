// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function balloon (string) {
    var aux = string.split('');
    var acc = 0;
    var b = aux.filter(function(e, i){
        return e ==="b";
    })
    var a = aux.filter(function(e, i){
        return e ==="a";
    })
    var l = aux.filter(function(e, i){
        return e ==="l";
    })
    var o = aux.filter(function(e, i){
        return e ==="o";
    })
    var n = aux.filter(function(e, i){
        return e ==="n";
    })
    while (b !== [] && a !== [] && l !== [] && o !== [] && n !== [] ){
        if (b.length >=1 && a.length >= 1 && n.length >= 1 && o.length >=2 && l.length >= 2){
            acc += 1;
            b.slice(1);
            a.slice(1);
            l.slice(2);
            o.slice(2);
            n.slice(1);
        } else {
            acc = acc;
        }
        return acc;
    }
}

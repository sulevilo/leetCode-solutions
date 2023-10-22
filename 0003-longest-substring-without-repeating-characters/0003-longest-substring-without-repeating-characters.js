/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let characters = s.split("");
    let longest = [], temp = [], sw = false , j, del;
    
    if (characters.length == 1) return 1

    for (let i = 0; i < characters.length; i++){
        
        j = 0;
        sw = false;
        
        while ( temp.length > j ){
            
            if (characters[i]==temp[j]) {
                sw =true;
                
                j = temp.length
            }else {
                j++
            }
        }
        
        if (sw) {
            
            do{
                del = temp[0]
                temp.shift();
                if ( del == characters[i]) sw= false
                
            }while(sw) 

        }
        temp.push( characters[i]);
        
        if ( temp.length > longest.length ) longest = [...temp]

       
       
    }
    
    return longest.length
};
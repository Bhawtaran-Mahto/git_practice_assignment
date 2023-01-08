 let max=0;
    
    for(let i=0;i<S.length;i++){
        let bag="";
        for (let j=i;j<S.length;j++){
            bag +=S[j]
           let rev="";
            for (let k=bag.length-1;k>=0;k--){
                rev +=bag[k]
            }if (rev== bag && max < bag.length){
                max=bag.length;
            }
        }
        
    }console.log(max) 
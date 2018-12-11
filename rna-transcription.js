
const mapObj = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
}

export const toRna = (rna) => {
    
    if(rna === 'U')
    throw new Error('Invalid input DNA.')

    rna = rna.replace(/C|G|A|T/g, function(matched){
    return mapObj[matched]})
    
    if (rna.indexOf('X') !== -1)
//    
    else
    return rna

    }


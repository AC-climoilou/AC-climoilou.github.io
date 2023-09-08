const TPS = 0.05
const TVQ_2013_PLUS = 0.09975
const TVQ_2012 = 0.095
const TVQ_2011 = 0.085

function calculTPS(montantSansTaxe){
    return montantSansTaxe * TPS
}

function calculTVQ(annee, montantSansTaxe){
    if(annee >= "2013"){
        return montantSansTaxe * TVQ_2013_PLUS
    }
    
    else if (annee === "2012") {
        return montantSansTaxe * TVQ_2012
    }
    else {
        return montantSansTaxe * TVQ_2011
    }
}

export {
    calculTPS, calculTVQ
}
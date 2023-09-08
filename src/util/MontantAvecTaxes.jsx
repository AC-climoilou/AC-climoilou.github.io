import {calculTPS, calculTVQ} from "./Mathematique";

export class MontantAvecTaxes {

    constructor(annee, montantSansTaxe) {
        this.annee = annee;
        this.montantSansTaxe = montantSansTaxe;
        this.tps = calculTPS(montantSansTaxe) || 0;
        this.tvq = calculTVQ(annee, montantSansTaxe) || 0;
        this.montantAvecTaxe = parseFloat(this.montantSansTaxe) + parseFloat(this.tps) + parseFloat(this.tvq) || 0;
    }

    getMontantSansTaxe() {
        return this.montantSansTaxe
    }

    getTPS(){
        return this.tps;
    }

    getTVQ(){
        return this.tvq;
    }

    getMontantAvecTaxe(){
        return this.montantAvecTaxe;
    }

    getYear(){
        return this.annee
    }
}
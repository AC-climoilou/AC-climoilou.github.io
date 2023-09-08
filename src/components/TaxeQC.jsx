import React, { Component } from 'react';
import { MontantAvecTaxes } from '../util/MontantAvecTaxes';

const ANNEES = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"]

class TaxeQC extends Component {

    state = {
        montantAvecTaxes: new MontantAvecTaxes(2023, 50)
    }

    changerAnnee = (e) => {
        this.setState(() => ({
            montantAvecTaxes: new MontantAvecTaxes(e.target.value, this.state.montantAvecTaxes.getMontantSansTaxe())
        }));
    }

    changerMontantAvecTaxe = (e) =>{
        this.setState(() => ({
            montantAvecTaxes: new MontantAvecTaxes(this.state.montantAvecTaxes.getYear(), e.target.value)
        }));
    }

    arrondirMontant(montant) {
        return Math.round(montant * 100) / 100 + " $"
    }

    render() {
        return (
            <div className='App'>
                <fieldset>
                    <legend>Choisissez l'année du calcul:</legend>

                    <select onChange={this.changerAnnee}>
                        {
                            ANNEES.map((annee, index) => {
                                return <option key={index}>{annee}</option>
                            })
                        }
                    </select>

                    <p>
                        <legend>Entrez le montant avant taxe :</legend>
                        <input value={this.state.montantAvecTaxes.getMontantSansTaxe()} onChange={this.changerMontantAvecTaxe}></input>
                    </p>

                    <legend>TPS :</legend>
                    <input readOnly value={this.arrondirMontant(this.state.montantAvecTaxes.getTPS())}></input>

                    <legend>TVQ :</legend>
                    <input readOnly value={this.arrondirMontant(this.state.montantAvecTaxes.getTVQ())}></input>

                    <legend>Montant Total :</legend>
                    <input readOnly value={this.arrondirMontant(this.state.montantAvecTaxes.getMontantAvecTaxe())}></input>
            
                </fieldset>
            </div>
        );
    }
}

export default TaxeQC;
const valor_hora = 5000;
const valor_hora_extra = 7000;

function SueldoBruto(hora_oficial, hora_extra){
    
    let sueldo_bruto = parseInt( hora_oficial * valor_hora )+( hora_extra * valor_hora_extra )    
    return sueldo_bruto
}

function BonoMarzo(sueldo_bruto){
    let bono_marzo = 0;

    if (sueldo_bruto > 200000) {
        bono_marzo = Math.round(sueldo_bruto * 1.2)
    } else {
        bono_marzo = Math.round(sueldo_bruto * 1.15)
    }

    return bono_marzo
}

function DescuentoAFP(afp, sueldo_bruto){
    let descuento = 0;

    const lista_afp = {
        'cuprum': 0.07,
        'modelo': 0.09,
        'capital': 0.12,
        'provida': 0.13
    }
    
    descuento = Math.round(lista_afp[afp] * sueldo_bruto)

    return descuento
}

function DescuentoPrevision(prevision, sueldo_bruto){
    let descuento = 0;

    const lista_prevision = {
        'fonasa': 0.12,
        'consalud': 0.13,
        'masvida': 0.14,
        'banmedica': 0.15
    }
    
    descuento = Math.round(lista_prevision[prevision] * sueldo_bruto)

    return descuento
}

function SueldoLiquido(sueldo_bruto, descuento_afp, descuento_prevision){
    let sueldo_liquido = 0;

    sueldo_liquido = parseInt(sueldo_bruto)- parseInt(descuento_afp) - parseInt(descuento_prevision)

    return sueldo_liquido
}

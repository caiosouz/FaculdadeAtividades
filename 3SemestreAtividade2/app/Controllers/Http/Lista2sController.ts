export default class Lista1sController { 
    ex1({request}){ 
        const req = request.body() 
        const min = parseInt (req.min)
        const max = parseInt (req.max)
        const estoqueMedio = (min + max)/2 
        return {estoqueMedio} 
    } 
    ex2({request}){ 
        const req = request.body() 
        const funcionario = req.funcionario 
        const horas = parseInt (req.horas)
        const valorH = parseInt (req.valorH) 
        const filhos = parseInt (req.filhos) 
        const salarioH = horas * valorH 
        const bonus = (salarioH * 0.03) * filhos 
        const total = (salarioH + bonus) 
        const resultado = { 
            funcionario: funcionario, 
            salario: salarioH, 
            bonus: bonus, 
            total: total 
        } 
        return {resultado} 
    } 
    ex3({request}){ 
        const req = request.body() 
        const ano = parseInt (req.ano)
        const meses = parseInt (req.meses)
        const dias = parseInt (req.dias)
        const idadeTotal = (ano * 365) + (meses * 30) + dias 
        const resultado = { 
            ano: ano, 
            meses: meses, 
            dias: dias, 
            totalDias: idadeTotal
        } 
        return {resultado} 
    } 
    ex4({request}){ 
        const req = request.body() 
        const dias = parseInt (req.dias)
        const restoAnos = dias % 365 
        const anos = (dias - restoAnos)/365  
        const restoMeses = restoAnos % 30  
        const meses = (restoAnos - restoMeses)/30 
         
        const resultado = { 
            anos : anos,  
            meses: meses,  
            dias : restoMeses 
        } 
        return {resultado} 
    } 
    ex5({request}){ 
        const req = request.body() 
        const n1 = parseInt (req.n1)
        const n2 = parseInt (req.n2)
        const n3 = parseInt (req.n3)
        const pesos = ((n1 * 2 ) + (n2 * 3) + (n3 * 5)) / (2 + 3 + 5) 
        const resultado = {  
            media: pesos 
        } 
         
        return {resultado} 
    } 
     ex6({request}){ 
        const req = request.body() 
        const duracao = parseInt (req.duracao)
        const restoSeg = duracao % 3600
        const horas = (duracao - restoSeg)/3600
        const restoMin = restoSeg % 60
        const min = (restoSeg - restoMin)/60
        const seg = restoMin % 60
         
        const resultado = {   
            horas: horas,
            minutos: min,
            segundos: seg
        } 
    return {resultado} 
} 
    ex7({request}){ 
        const req = request.body() 
        const nome = req.nome 
        const salario = parseInt (req.salario)
        const vendas = parseInt (req.vendas)
        const percent = parseInt (req.percent)
        const total = salario + (vendas * (percent / 100)) 
        const resultado = { 
            nome: nome, 
            salarioTotal: total 
        } 
        return {resultado} 
    } 
    ex8({request}){ 
        const req = request.body() 
        const piloto = (req.piloto) 
        const distancia = parseInt (req.distancia)
        const tempo = parseInt (req.tempo)
        const calc = (distancia / tempo) 
        const resposta = `A velocidade média do ${piloto}, é de ${calc} km/h`
         
        return {resposta} 
    } 
     
    ex9({request}){ 
        const req = request.body() 
        const salario = parseInt (req.salario)
        const total = salario + (salario * 30/100) 
         
        if (salario <= 999){ 
            const resultado =  { 
                salarioNovo: total 
            } 
            return resultado
        } else { 
            const resultado = { 
                mensagem: 'O funcionário não está favorável ao aumento' 
            } 
            return resultado
        }      
    }        
}
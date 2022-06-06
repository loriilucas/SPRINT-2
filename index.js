let pagos = []

function convertir(){
    let total = 0
    let nombre = $("#nombre").val();
    let dinero = $("#dinero").val();
    pagos.push(parseFloat(dinero));

    $("#anotacion").append(`<h5>${nombre + " $" + dinero} </h5>`);

    for(let i=0; i<pagos.length; i++){
        total += pagos[i]
    }
    $("#final").empty();
    $("#final").append(`<h5>${"$"+ total} </h5>`)
    $("#pagoFinal").empty();
    $("#pagoFinal").append(`<h5>${"$" + total/pagos.length} </h5>`)
}

$("#dinero").keypress(function(event){
    if(event.which==13){
        convertir();
    }
});
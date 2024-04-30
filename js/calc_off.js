$('input[type="number"]').bind('input', function () { 
    
    var All = 0;

    var stars = document.getElementsByClassName('form-control');
    
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }
    
    var acsta = document.getElementsByName('wb');
    for(let i = 0; i < acsta.length; i++){
        var a = Number(acsta[i].value);
        All += 11000*a;
    }

    var cacba = document.getElementsByName('cc');
    for(let i = 0; i < cacba.length; i++){
        var a = Number(cacba[i].value);
        All += 2000*a;
    }

    var frasta = document.getElementsByName('mdk');
    for(let i = 0; i < frasta.length; i++){
        var a = Number(frasta[i].value);
        All += 1500*a;
    }

    var photo = document.getElementsByName('pf');
    for(let i = 0; i < photo.length; i++){
        var a = Number(photo[i].value);
        All += 800*a;
    }

    var filedxtn = document.getElementsByName('mp');
    for(let i = 0; i < filedxtn.length; i++){
        var a = Number(filedxtn[i].value);
        All += 2300*a;
    }

    var fileokubo = document.getElementsByName('ib');
    for(let i = 0; i < fileokubo.length; i++){
        var a = Number(fileokubo[i].value);
        All += 3800*a;
    }

    var filetanaka = document.getElementsByName('ts');
    for(let i = 0; i < filetanaka.length; i++){
        var a = Number(filetanaka[i].value);
        All += 4500*a;
    }

    var filetaniguchi = document.getElementsByName('rpms');
    for(let i = 0; i < filetaniguchi.length; i++){
        var a = Number(filetaniguchi[i].value);
        All += 3500*a;
    }

    var fileterao = document.getElementsByName('ips');
    for(let i = 0; i < fileterao.length; i++){
        var a = Number(fileterao[i].value);
        All += 2000*a;
    }

    var filehiramoto = document.getElementsByName('rs');
    for(let i = 0; i < filehiramoto.length; i++){
        var a = Number(filehiramoto[i].value);
        All += 1500*a;
    }

    var filefukuda = document.getElementsByName('mcb');
    for(let i = 0; i < filefukuda.length; i++){
        var a = Number(filefukuda[i].value);
        All += 2000*a;
    }

    var card = Math.floor(All / 8000)

    document.getElementById("result-erea").innerHTML = "<h3 class='text-white'>合計" + Allnum + "点</h3>" + "<h3 class='text-white'>" + All + "円</h3><h3 class='text-white'>トレカ" + card + "枚</h3>";
    document.getElementById("result").innerHTML = "<h3 class='text-primary'>合計" + Allnum + "点</h3>" + "<h3 class='text-primary'>" + All + "円</h3><h3 class='text-primary'>トレカ" + card + "枚</h3>";
});

function capture() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").href = imgData;
        document.getElementById("imgmk").innerHTML = "画像を再作成";
    });
}

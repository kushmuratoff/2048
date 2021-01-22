var ulcham = 5, k1 = 0, k2 = 0, k3 = 0, k4 = 0;
var tekkk = 0;
var ochko = 0;
var son = [0,2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
var rang = ["cyan", "red", "green", "blue", "brown", "greenyellow", "hotpink", "seagreen", "cadetblue", "crimson", "salmon", "tan", "blueviolet"];
var mas; var mas1;

function key(event) {
    var keyy = event.which || event.keyCode;
    
    if (keyy == 38)
    {
        
        tepaga();
       // alert(keyy);
    }
    else if (keyy == 39) {
        
        onga();
       // alert(keyy);
    }
    else if (keyy == 40) {
        
        pastga();
      //  alert(keyy);
    }
    else if (keyy == 37) {
        
        chapga();
        //alert(keyy);
    }
    else if (keyy == 27) {

        Boshlash();
        //alert(keyy);
    }
}

function yuklash()
{
   
    for (i = 0; i < ulcham; i++) {
        for (j = 0; j < ulcham; j++) {
            mas1[i][j] = mas[i][j];
            //alert(mas1[i][j]);
            
        }
    }
}

function tekshirish()
{
    
    tekkk = 0;
    for (i = 0; i < ulcham; i++) {
        for (j = 0; j < ulcham; j++) {
            if(mas[i][j]==mas1[i][j])
            {
                
                tekkk++;
            }

        }
    }
   
    if(tekkk!=ulcham*ulcham)
    {
        ikki();
        ekranga();
    }
    else {
        var nul = 0;
        for (i = 0; i < ulcham; i++) {
            for (j = 0; j < ulcham; j++) {
                if (mas[i][j] == 0) nul++;
            }
        }
        if (k1 + k2 + k3 + k4 == 4 && nul == 0) { alert("Game Over"); }

    }
}

function Boshlash() {
    k1 = 0, k2 = 0, k3 = 0, k4 = 0;
    ochko = 0;
    //alert(ulcham);
    var blok = document.getElementById("blok");
    var olish = document.getElementById("ulcham").value;
    if (olish.length <= 0)
    {
        alert(olish);
    }
    else { ulcham = olish; }

    mas = new Array(ulcham);
    for (var i = 0; i < ulcham; i++) {

        mas[i] = new Array(ulcham);
    }
     mas1 = new Array(ulcham);
    for (var i = 0; i < ulcham; i++) {
        mas1[i] = new Array(ulcham);
    }
   // alert(olish.length);
    while (blok.hasChildNodes()) {
        blok.removeChild(blok.lastChild);
    }
    for (i = 0; i < ulcham; i++) {
        for (j = 0; j < ulcham; j++) {
            // Append a node with a random text
            //container.appendChild(document.createTextNode("Member " + (i + 1)+(j+1)));
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "button";
            input.name = "member" + i + j;
            input.value = " ";
            //mas[i, j] = input.value;
            input.id = "id" + i + j;
            input.width = 80;
            input.height = 80;
            
            blok.appendChild(input);
            // Append a line break 

        }
        blok.appendChild(document.createElement("br"));
        

    }
    chop();
}
function chop()
{
    var so = Math.random();
    var son = Math.floor(Math.random() * ulcham);
    var son1 = Math.floor(Math.random() * ulcham);
    var son2 = Math.floor(Math.random() * 4);
    var son3 = Math.floor(Math.random() * 4);
    var sonlar = [son, son1, son2, son3];
    //alert(son);
    //alert(son1);
    //alert(son2);
    //alert(son3);
   // for (i = 0; i < ulcham; i++) {
   //    // alert(sonlar[i]);
   // }
   //// alert(so);

    for (i = 0; i < ulcham; i++)
    {
        for (j = 0; j < ulcham; j++) {
            mas[i][j] = 0;
            
        }
    }
    mas[son][son1] = 2;

   // for (k = 0; k < sonlar.length; k++) {
   //    mas[k][sonlar[k]] = 2;
   // }
    ekranga();
}
function tep_yor()
{
    var t;
    for (j = 0; j < ulcham; j++) {
        for (i = 0; i < ulcham; i++) {
            for (var k = 0; k < ulcham - 1; k++)
                if (mas[k][j] == 0) {
                    t = mas[k][j]; mas[k][j] = mas[k + 1][j]; mas[k + 1][j] = t;
                }

        }
    }
}
function tepaga()
{
    yuklash();
    
    var sum = 0;
    tep_yor();
    for (j = 0; j < ulcham; j++) {
           for (var k = 0; k < ulcham - 1; k++)
                if (mas[k][j] == mas[k+1][j]) {
                    mas[k][j] += mas[k + 1][j]; mas[k + 1][j] = 0; sum += mas[k][j];
                }
           }
  
    tep_yor();
    if (sum == 0)
    {
        k1 = 1;
    }
    else { k1 = 0;}
        ochko += sum;
        tekshirish();   
    
}

function past_yor()
{
    var t;
    for (j = ulcham-1; j>=0; j--) {
        for (i = ulcham-1; i>=0; i--) {
            for (var k = ulcham-1; k >0; k--)
                if (mas[k][j] == 0) {
                    t = mas[k][j]; mas[k][j] = mas[k - 1][j]; mas[k - 1][j] = t;
                }

        }
    }
}
function pastga()
{
    yuklash();

    var sum = 0;
    past_yor();
    for (j = ulcham-1; j >=0; j--) {
        for (var k = ulcham-1; k >0; k--)
            if (mas[k][j] == mas[k - 1][j]) {
                mas[k][j] += mas[k - 1][j]; mas[k - 1][j] = 0; sum += mas[k][j];
            }
    }
    past_yor();
    if (sum == 0) {
        k2 = 1;
    }
    else { k2 = 0; }

        ochko += sum;
        tekshirish();
}

function onga_yor()
{
    var t;
    for(var i=0;i<ulcham;i++)
    {
        for(var j=0;j<ulcham;j++)
        {
            for(var k=1;k<ulcham;k++)
            {
                if(mas[i][k]==0)
                {
                    t = mas[i][k]; mas[i][k] = mas[i][k-1]; mas[i][k-1] = t;
                }
            }
        }
    }

}
function onga()
{
    yuklash();

    var sum = 0;
    onga_yor();
    for (var j = ulcham-1; j>=0; j--) {
        for (var k = ulcham-1; k >0; k--) {
            if (mas[j][k] == mas[j][k-1]) {
                mas[j][k] += mas[j][k - 1]; mas[j][k - 1] = 0; sum += mas[j][k];
            }
        }
    }
    onga_yor();
    if (sum == 0) {
        k3 = 1;
    }
    else { k3 = 0; }
        ochko += sum;
        tekshirish();

}

function chapga_yor()
{
    var t;
    for (var i = 0; i < ulcham; i++) {
        for (var j = 0; j < ulcham; j++) {
            for (var k = 0; k < ulcham-1; k++) {
                if (mas[i][k] == 0) {
                    t = mas[i][k]; mas[i][k] = mas[i][k +1]; mas[i][k + 1] = t;
                }
            }
        }
    }

}
function chapga()
{
    yuklash();

    var sum = 0;
    chapga_yor();
    for (var i = 0; i < ulcham; i++) {
        for (var k = 0; k < ulcham - 1; k++) {
            if (mas[i][k] == mas[i][k+1]) {
                mas[i][k] += mas[i][k + 1]; mas[i][k + 1] = 0; sum += mas[i][k];
            }
        }
    }
    chapga_yor();
    if (sum == 0) {
        k4 = 1;
    }
    else { k4 = 0; }
    ochko += sum;
    tekshirish();
   }
function ekranga()
{
    
    for (i = 0; i < ulcham; i++) {
        for (j = 0; j < ulcham; j++) {

            for (var k = 0; k < rang.length; k++)
            {
                if(son[k]==mas[i][j])
                {
                    document.getElementById("id" + i.toString() + j.toString()).style.backgroundColor = rang[k];
                    if (mas[i][j] != 0)
                    { document.getElementById("id" + i.toString() + j.toString()).value = mas[i][j]; }
                    else { document.getElementById("id" + i.toString() + j.toString()).value = " "; }
                }
            }

           
        }
    }

    document.getElementById("ochko").style.color = "blue";
    document.getElementById("ochko").style.paddingLeft = "2px";

    document.getElementById("ochko").innerHTML =  ochko;
}
function ikki()
{
    var son, son1=0;
    son = Math.floor(Math.random() * ulcham);
    do {
        son = Math.floor(Math.random() * ulcham);
        son1 = Math.floor(Math.random() * ulcham);
    }
    while (mas[son][son1] != 0);
    //while (son1 == 0) {
    //    for (var i = 0; i < ulcham; i++) {
    
    //        if (mas[i][son] == 0) { alert(i.toString() + "  " + son.toString()); mas[i][son1] = 2; son1 = 1; break; }
    //    }
    //    if (son1 == 0) {
    //        for (var i = 0; i < ulcham; i++) {
    //            if (mas[son][i] == 0) { alert(son.toString() + "  " + i.toString()); mas[son][i] = 2; son1 = 1; break; }
    //        }
    //    }
    //}
    //alert(son.toString() + "  " + son1.toString());
    mas[son][son1] = 2;
}
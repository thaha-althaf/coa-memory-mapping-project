function addRowdirect(tableID) 
{  
    var table = document.getElementById(tableID);  
    var rowCount = table.rows.length;  
    var row = table.insertRow(rowCount); 
    

    var mem=document.getElementById("fname").value;
    var temp,rem,bin=0,pl=1;
    temp=mem;
    while(temp>0)
    {
        rem=temp%2;
        bin=bin+(rem*pl);
        temp=parseInt(temp/2);
        pl=pl*10;
    }
    var neww=parseInt(bin/100);
    neww=neww%1000;
    neww=parseInt(neww,2);

    var hm="miss";

    var Cells = table;
    var child=document.getElementById("temp");
    var i=2,r=rowCount;
    if(rowCount>1)
    {
        while(r>0)
        {
            child=child.nextSibling;
            r-=1;
        }
    
        if(mem===child.children[neww+2].innerHTML)
        hm="hit";

        if(hm==="hit")
        {
            var cell0 = row.insertCell(0);  
            cell0.innerHTML = mem;
            var cell1 = row.insertCell(1);  
            cell1.innerHTML =  hm;  
            var i=2;
            while(i<10)
            {
                var cell2 = row.insertCell(i);  
                cell2.innerHTML =  child.children[i].innerHTML;
                i++;
            }
            var cell0 = row.insertCell(10); 
            console.log(rowCount,child.children[10].innerHTML); 
            cell0.innerHTML = parseFloat(((child.children[10].innerHTML*(rowCount-1)))/(rowCount)).toFixed(3);
            var cell1 = row.insertCell(11);  
            cell1.innerHTML = parseFloat(1-((child.children[10].innerHTML*(rowCount-1)))/(rowCount)).toFixed(3);
        }
        else
        {
            var cell0 = row.insertCell(0);  
            cell0.innerHTML = mem;
            var cell1 = row.insertCell(1);  
            cell1.innerHTML =  hm;  
            var i=2;
            while(i<10)
            {
                var cell2 = row.insertCell(i);  
                if(i===neww+2)
                cell2.innerHTML =  mem; 
                else
                cell2.innerHTML =  child.children[i].innerHTML;
                i++;
            }
            var cell0 = row.insertCell(10); 
            console.log(rowCount,child.children[10].innerHTML); 
            cell0.innerHTML = parseFloat(((child.children[10].innerHTML*(rowCount-1))+1)/(rowCount)).toFixed(3);
            var cell1 = row.insertCell(11);  
            cell1.innerHTML = parseFloat( 1-((child.children[10].innerHTML*(rowCount-1))+1)/(rowCount)).toFixed(3);
        }
    }
    else
    {   
        var cell0 = row.insertCell(0);  
        cell0.innerHTML = mem;
        var cell1 = row.insertCell(1);  
        cell1.innerHTML =  hm;  
        var i=2;
        while(i<10)
        {
            var cell2 = row.insertCell(i);  
            if(i===neww+2)
            cell2.innerHTML =  mem; 
            else
            cell2.innerHTML =  "";
            i++;
        }
        var cell0 = row.insertCell(10);  
        cell0.innerHTML = 1.000;
        var cell1 = row.insertCell(11);  
        cell1.innerHTML =  0.000;  
    }    
}  
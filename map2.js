var l=[0,0,0,0,0,0,0,0];
var arr=[0,0,0,0,0,0,0,0];
function addRow2way(tableID) 
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
    neww=neww%100;
    neww=parseInt(neww,2);

    var hm="miss";

    var Cells = table;
    var child=document.getElementById("temp1");
    var i=2,r=rowCount;
    var count=0;
    if(rowCount>1)
    {
        while(r>0)
        {
            child=child.nextSibling;
            r-=1;
        }
        if(mem===child.children[(neww*2)+2].innerHTML)
        {
            count++;
            hm="hit";
            arr[(neww*2)+0]=1;
            arr[(neww*2)+1]=0;
        }
        else if(mem===child.children[(neww*2)+3].innerHTML)
        {
            count++;
            hm="hit";
            arr[(neww*2)+0]=0;
            arr[(neww*2)+1]=1;
        }

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
            cell0.innerHTML = parseFloat((rowCount-count)/(rowCount)).toFixed(3);
            var cell1 = row.insertCell(11);  
            cell1.innerHTML = parseFloat( count/(rowCount)).toFixed(3);
        }
        else
        {
            var cell0 = row.insertCell(0);  
            cell0.innerHTML = mem;
            var cell1 = row.insertCell(1);  
            cell1.innerHTML =  hm;  
            var i=2;
            var check=0;
            while(i<10)
            {
                var cell2 = row.insertCell(i); 
                if(l[(neww*2)]===0&&check===0&&i===(neww*2)+2) 
                {
                    l[(neww*2)]=1;
                    cell2.innerHTML =  mem;
                    arr[(neww*2)]=1;
                    arr[(neww*2)+1]=0;
                    check=1; 
                } 
                else if(l[(neww*2)+1]===0&&check===0&&i===(neww*2)+3) 
                { 
                    l[(neww*2)+1]=1;
                    cell2.innerHTML =  mem;
                    arr[(neww*2)]=0;
                    arr[(neww*2)+1]=1;
                    check=1; 
                } 
                else if(arr[(neww*2)]===0&&check===0&&i===(neww*2)+2)
                { 
                    cell2.innerHTML =  mem;
                    arr[(neww*2)]=1;
                    arr[(neww*2)+1]=0;   
                    check=1; 
                } 
                else if(arr[(neww*2)+1]===0&&check===0&&i===(neww*2)+3)
                { 
                    cell2.innerHTML =  mem;
                    arr[(neww*2)]=0;
                    arr[(neww*2)+1]=1;   
                    check=1;
                } 
                else
                cell2.innerHTML =  child.children[i].innerHTML;
                i++;
            }
            var cell0 = row.insertCell(10); 
            cell0.innerHTML = parseFloat((rowCount-count)/(rowCount)).toFixed(3);
            var cell1 = row.insertCell(11);  
            cell1.innerHTML = parseFloat( count/(rowCount)).toFixed(3);
        }
    }
    else
    {   
        var cell0 = row.insertCell(0);  
        cell0.innerHTML = mem;
        var cell1 = row.insertCell(1);  
        cell1.innerHTML =  hm;  
        var i=2;
        l[(neww*2)]=1;
        arr[(neww*2)]=1;
        while(i<10)
        {
            var cell2 = row.insertCell(i);  
            if(i===(neww*2)+2)
            cell2.innerHTML =  mem; 
            else
            cell2.innerHTML =  "";
            i++;
        }
        var cell0 = row.insertCell(10);  
        cell0.innerHTML =1.000;
        var cell1 = row.insertCell(11);  
        cell1.innerHTML =0.000;  
}    
}  
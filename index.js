

function addtask(){

    const lt1=document.createElement('li')
    const tasklist=document.getElementById('tasklist')
    tasklist.appendChild(lt1);
    lt1.textContent=document.getElementById('text1').value 
    document.getElementById('text1').value="";
    deletetask(lt1)

}
function deletetask(lt1){
    const dlt=document.createElement('button')
    dlt.textContent="Delete"
    lt1.appendChild(dlt)
    dlt.onclick=function(){
        lt1.remove()
    }
}
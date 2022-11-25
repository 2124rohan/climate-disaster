let count = 0
document.getElementById('btn').onclick = function(){
    
    count+=Number(document.getElementById('countt').value)
    document.getElementById('num').innerHTML = count
}
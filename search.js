const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

if(input){

input.addEventListener("input", ()=>{

const text = input.value.toLowerCase();

results.innerHTML="";

if(text.length<2) return;

const matches = searchData.filter(item=>{

return (
item.title.toLowerCase().includes(text)
||
item.keywords.toLowerCase().includes(text)
);

});

if(matches.length===0){

results.innerHTML="<p>Ingen treff.</p>";

return;

}

matches.forEach(item=>{

results.innerHTML+=`

<div class="result">

<a href="${item.page}#${item.anchor}">

${item.title}

</a>

</div>

`;

});

});

}
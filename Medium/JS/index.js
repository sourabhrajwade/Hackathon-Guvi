window.addEventListener("DOMContentLoaded", function () {
   
        const userName = document.getElementById('exampleInputEmail1').value;
        console.log(userName);
        const key = document.getElementById('exampleInputPassword1').value;
        const searchBar = document.getElementById('search');
        console.log(key);
        const rowCard = document.getElementById("row-card");
        
        async function getData (userName){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@"+"drew.costley");
            const data = await response.json();
            console.log(data);
            //window.localStorage.setItem('user', JSON.stringify(data));
            for (let i = 0; i < data["items"].length;) {
                //let j = i + 1;
                //let k = i + 2;
                let cardBody1 = document.getElementById('1');
                //let cardBody2 = document.getElementById('2');
                //let cardBody3 = document.getElementById('3');
                

                cardBody1.innerHTML = data["items"][i]["content"];
                //cardBody2.innerHTML = data["items"][j]["content"];
                //cardBody3.innerHTML = data["items"][k]["content"];

                
            }
            
        }
        getData(userName);
        
        const searchState = (searchText => {
            
            const data = JSON.parse(window.localStorage.getItem('user'))
            //console.log(data);
            let matches = data["items"].filter(state => {
                const regex = new RegExp(`^${searchText}`,'gi');
                return  state.title.match(regex) || state.description.match(regex);
            });
            console.log(matches);
        })
        searchBar.addEventListener('input', () => searchState(searchBar.value));
        
        
        
        

    

})
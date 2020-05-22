window.addEventListener("DOMContentLoaded", function () {
   
        const user = document.getElementById('exampleInputEmail1');
        //console.log(user);
        const key = document.getElementById('exampleInputPassword1').value;
        const searchBar = document.getElementById('search');
        //console.log(key);
        //const rowCard = document.getElementById("row-card");
        
        const app = {
            pages: [],
            show: new Event('show'),
            init: function () {
                app.pages = document.querySelectorAll('.page');
                app.pages.forEach((pg) => {
                    pg.addEventListener('show', app.pageShown);
                })

                document.querySelectorAll('.change').forEach((link) => {
                    link.addEventListener('click', app.nav)
                })
                history.replaceState({}, 'Home', '#home');
                window.addEventListener('popstate', app.poppin);
            },
            nav: function(ev) {
                ev.preventDefault();
                let currentPage = ev.target.getAttribute('data-target');
                document.querySelector('.active-page').classList.remove('active-page');
                document.getElementById(currentPage).classList.add('active-page');
                history.pushState({}, currentPage, `#${currentPage}`);
                document.getElementById(currentPage).dispatchEvent(app.show);

            },
            pageShown: function(ev) {
                console.log('Page',ev.target.id,'just shown');
            },
            poppin: function(ev) {
                console.log(location.hash, 'popstate event' );
                let hash = location.hash.replace('#', '');
                document.querySelector('.active-page').classList.remove('active-page');
                document.getElementById(hash).classList.add('active-page');
                //history.pushState({}, currentPage, `#${currentPage}`);
                document.getElementById(hash).dispatchEvent(app.show);

            }
        }
        app.init();
        const submit = document.querySelector('.btn-primary');
        submit.addEventListener('click', getData);
        async function getData () {
            const userName = user.value;
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@" + userName);
            const data = await response.json();
            //return data;
            const container = document.querySelector('#content');
            //const row = document.querySelector('#row-cards');
            
            const imageAuthor = document.querySelector(".logo");
            imageAuthor.setAttribute("src", `${data["feed"].image}`)
               for (let i =0; i < data['items'].length; i++) {
                    const row = document.getElementById('row-cards');
                    //let i =0;
                    let j = i+1;
                    let k = i+2;
                    row.innerHTML = `   <div class="card-deck" justify-content-center align-items-center>
                                        <div class="card" id="1" style="width: 18rem;" >
                                            <img class="card-img-top" src="${data['items'][i].thumbnail}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${data['items'][i].title}</h5>
                                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">${data["items"][i].pubDate}</small></p>
                                                <a href="${data["items"][i].guid}">Continue Reading</a>
                                            </div>
                                        </div>
                                        <div class="card" id="2" style="width: 18rem;">
                                            <img class="card-img-top" src="${data['items'][j].thumbnail}" alt="Card image cap">
                                             <div class="card-body">
                                                <h5 class="card-title">${data['items'][j].title}</h5>
                                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">${data["items"][j].pubDate}</small></p>
                                                <a href="${data["items"][j].guid}">Continue Reading</a>
                                             </div>
                                        </div>
                                        <div class="card id="3" style="width: 18rem;">
                                            <img class="card-img-top" src="${data['items'][k].thumbnail}" alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${data['items'][k].title}</h5>
                                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">${data["items"][k].pubDate}</small></p>
                                                <a href="${data["items"][k].guid}">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>`
                    container.appendChild(row);
                   i = i + 3 
                }
                //const searchBar = document
                searchBar.addEventListener('input', () => searchState(searchBar.value));
                async function searchState (data) {
                    let matches = await  data["items"].filter(state => {
                        const regex = new RegExp(`^${searchText}`,'gi');
                        state.title.match(regex) || state.description.match(regex);
                    });
                }
                
                //console.log(matches)
            //console.log(data);

        };
        //getData('drew.costley')
        
        
        
       
        
        
        

    

})
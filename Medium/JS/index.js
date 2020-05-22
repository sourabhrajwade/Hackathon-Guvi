window.addEventListener("DOMContentLoaded", function () {
   
        const userName = document.getElementById('exampleInputEmail1').value;
        console.log(userName);
        const key = document.getElementById('exampleInputPassword1').value;
        const searchBar = document.getElementById('search');
        console.log(key);
        const rowCard = document.getElementById("row-card");
        
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
       
        
        
        

    

})
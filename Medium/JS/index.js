window.addEventListener("DOMContentLoaded", function () {
    const CardHolder = document.querySelector('#card-holder');
    const searchBar = document.querySelector('#myInput');
    let data = [];

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filterRes = data.items.filter((item) => {
            return  (item.title.toLowerCase().includes(searchString) ||
                    item.author.toLowerCase().includes(searchString) ||
                    item.categories.toLowerCase().includes(searchString) );
        })
        displayCards(filterRes)

    })

    const loadData = async() => {
        try {
            let userName = 'drew.costley';
            let key = '';
            const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@'+userName);
            data = await res.json();
            console.log(data);
            displayCards(data.items);
        }
        catch(err) {
            console.log(err);
        }
    }
    loadData();
    const displayCards = (data) => {
        const htmlString = data.map((item) => {
            return ` <li class="item"><div class="card"  justify-content-center  style="width: 18rem;">
            <img src="${item.thumbnail}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${toShortenText(item.title, 0, 30)+ '...'}</h5>
                <p class="card-text">${'...' + toShortenText(convertToText(item.content),60, 300)+ '...'}</p>
                <a href="${item.link}" target="_blank" class="btn btn-primary">Go somewhere</a>
                
                ${toShortenText(item.pubDate,0 ,10)}
                
            </div>
        </div></li>
            
            `
        }).join('');
        CardHolder.innerHTML = htmlString;
    }
    function convertToText(ele) {
        let holder = document.createElement('div');
        holder.innerHTML = ele;
        ele = holder.innerText;
        return ele;
    }
    function toShortenText(content, start, maxLen) {
        return content.length > maxLen ? content.slice(start, maxLen) : content;
    }

})



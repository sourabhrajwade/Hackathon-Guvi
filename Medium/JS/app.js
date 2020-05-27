window.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@drew.costley')
    .then((res) => res.json())
    .then ((data) => {
        console.log(data);
        const results = data.items;
        console.log(results);
        const blogPost = results.filter(item => item.categories.length > 0);
        // To get text 
        function convertToText(ele) {
            let holder = document.createElement('div');
            holder.innerHTML = ele;
            ele = holder.innerText;
            return ele;
        }
        function toShortenText(content, start, maxLen) {
            return content.length > maxLen ? content.slice(start, maxLen) : content;
        }
        // 
        let cardDetail = '';
        blogPost.forEach(item => {
            cardDetail += `<li class="card-list">
                <div class="card"  justify-content-center  style="width: 18rem;">
                    <img src="${item.thumbnail}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${toShortenText(item.title, 0, 30)+ '...'}</h5>
                        <p class="card-text">${'...' + toShortenText(convertToText(item.content),60, 300)+ '...'}</p>
                        <a href="${item.link}" target="_blank" class="btn btn-primary">Go somewhere</a>
                        
                        ${toShortenText(item.pubDate,0 ,10)}
                        
                    </div>
                </div>
            </li>

            `
        });
        document.querySelector('.blog__slider').innerHTML = cardDetail;
        function myFunction() {
            // Declare variables
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById('myInput');
            filter = input.value.toUpperCase();
            ul = document.getElementById("slider");
            li = ul.querySelectorAll('.card-list');
          
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
              h5 = li[i].getElementsByTagName("h5")[0];
              p =  li[i].getElementsByTagName("p")[0];
              txtValue = h5.textContent || h5.innerText || p.textContent || p.innerText;
              console.log(txtValue);
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
              } else {
                li[i].style.display = "none";
              }
            }
          }

          //var elements = document.querySelectorAll('.editable'),
          var quill = new Quill('#editor', {
            theme: 'snow'
          });
          const buttonText = document.querySelector('.btn-textbox');
          let delta;
          buttonText.addEventListener('click', function() {
            delta = quill.getContents();
            console.log(delta);
       

       

        var token = '2ae0c2281ac8b3b5a7cf193e300974bfae4481fbc7a590edd1621e9bcddfe1156'; //get one at https://medium.com/me/settings scroll to the very end of the page and 'add' integration token
        var userId = 'sourabhrajwade'; //open this link https://api.medium.com/v1/me?accessToken=XXXX in your browser and get your userid there

        var post_data = {
            'title' : 'Post title',
            'contentFormat' : 'html',
            'content': '<p>Test HTML post</p>',
            'canonicalUrl': 'https://Original-Url', //this one is important to avoid SEO issues
            'publishStatus': 'draft'
        };

        console.log(post_data);

        console.log('Sending the post request...');

        // Set up the request
        fetch({
            url: 'https://api.medium.com/v1/users/' + userId + '/posts',
            method: 'POST',
            json: true,
            headers: {
                'Authorization': 'Bearer ' + token,
                    "content-type": "application/json"
                },
            body: delta
            },
            function (error, response, body) {
                console.log(body);
                console.log(error);
            });
                
                

                
            })
    

        })
});




// fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@drew.costley')

//    .then((res) => res.json())

//    .then((data) => {

//       // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0

//       const res = data.items;//This is an array with the content. No feed, no info about author etc..

//       const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

//       // Functions to create a short text out of whole blog's content

//       function toText(node) {

//          let tag = document.createElement('div')

//          tag.innerHTML = node

//          node = tag.innerText

//          return node

//       }

//       function shortenText(textDisplay,startingPoint ,maxLength) {

//          return textDisplay.length > maxLength? textDisplay.slice(startingPoint, maxLength): textDisplay;
//       }

// ​

//       // Put things in right spots of markup

//       let output = '';

//       posts.forEach((item) => {

//          output += `

//          <li class="blog__post">

//             <a href="${item.link}">

//                <img src="${item.thumbnail}" class="blog__topImg"></img>

//                <div class="blog__content">

//                   <div class="blog_preview">

//                      <h2 class="blog__title">${shortenText(item.title, 0, 30)+ '...'}</h2>

//                      <p class="blog__intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>

//                   </div>

//                   <hr>

//                   <div class="blog__info">

//                      <span class="blog__author">${item.author}</span>

//                      <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>

//                   </div>

//                </div>

//             <a/>

//          </li>`

// ​

//       })

//       document.querySelector('.blog__slider').innerHTML = output

// });

// ​

// ​


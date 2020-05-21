
// interface userInfo {
//     username: string;
//     key?: string;
// }
// class LoginDetail {
//     username: string;
//     key?: string;
//     constructor (userInputInfo:userInfo) {
//         this.username = userInputInfo.username;
//         this.key = userInputInfo.key;
//     }
// }

// class User {
//     url: string;
//     image: string;

// }
// class Items {
//     title: string;
//     pubDate: string;
//     link: string;
//     author: string;
//     description: string;
//     content: string;
//     categories: string[];

// }

// class MediumApiService {
//     constructor (){
       
//     }
//     async getUserAPI (user: string) {
//         const fetchAPI = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@" + userInputInfo.username);
//         const { data } = await fetchAPI.json();
//         console.log(data);
//     }

// }

// const myData = new MediumApiService();
// myData.getUserAPI("sourabhrajwade");


function notePadConfig () {
    const buttons = document.querySelectorAll('.notepad-button') as NodeListOf<HTMLButtonElement>;
    const textField = document.querySelector('#output') as HTMLIFrameElement;
   textField.document.designMode = "On";

    for (let i =0; i < buttons.clientHeight, i++) {
        buttons[i].on("click", ()=> {
            let cmd = buttons[i].getAttribute('data-cmd');
            if (buttons[i].name === "active") {
                buttons[i].classList.toggle('active');
            }
            if (cmd === "insertImage" || cmd === "createLink") {
                let url = prompt("Enter link here:","");
                textField.document.execCommand(cmd, false, url);
                if(cmd === "insertImage") {
                    const imgs = textField.document.querySelectorAll('img');
                    imgs.forEach(items => {
                        imgs.style.maxWidth = "500px";
                    })
                } else {
                    const links = textField.document.querySelectorAll('a');

                    links.forEach(item => {
                        item.target = "_blank";
                        item.addEventListener('mouseover', ()=> {
                            textField.document.designMode = "Off";
                        });
                        item.addEventListener('mouseout', ()=> {
                            textField.document.designMode = "Off";
                        });

                    });
                }
            }
            else {
                textField.document.execCommand(cmd, false, null);
            }
        })
    }

}
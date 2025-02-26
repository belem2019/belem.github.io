const show = () => {
    const a = document.querySelector('#ashley');
    const r = new Request('./json/nursery.json');
    let tr = ''

    fetch(r)
    .then(response => response.json())
    .then(data => {
        data.forEach(
            function (e) {
                tr = "<tr>" + 
                `
                <th class="pb">${e.d}</th>
                <td class="p tf">${e.e1}</td>
                <td class="n tf">${e.e2}</td>
                <td class="n tf">${e.e3}</td>
                <td class="p tf">${e.f1}</td>
                <td class="n tf">${e.f3}</td>
                <td class="p tf">${e.f4}</td> 
                <td class="n tf">${e.f5}</td>
                <td>${e.w1}</td>
                <td>${e.s2}</td>
                ` 
                + "</tr>"
                a.innerHTML += tr;

                let p = document.querySelectorAll('.p.tf');
                p.forEach(function(ele) {
                    if(ele.innerHTML === "1") {
                        ele.setAttribute("class", "p tf green");
                    }
                    if(ele.innerHTML === "0") {
                        ele.setAttribute("class", "p tf red");
                    }
                })

                let n = document.querySelectorAll('.n.tf');
                n.forEach(function(ele) {
                    if(ele.innerHTML === "0") {
                        ele.setAttribute("class", "n tf green");
                    }
                    if(ele.innerHTML === "1") {
                        ele.setAttribute("class", "n tf red");
                    }
                })

                let td = document.querySelectorAll('.tf');
                td.forEach(function(ele) {
                    if(ele.innerHTML === "0") {
                        ele.innerHTML = ""
                    }
                    if(ele.innerHTML === "1") {
                        ele.innerHTML = "√"
                    }
                })
            }
        )
    })
    .catch(console.error);  
}

document.addEventListener('DOMContentLoaded', show, false)

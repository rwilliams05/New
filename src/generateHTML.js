function generateHTML(teamArray) {
    return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     
     <div class="container">
         ${teamArray.map(person => {
             if (person.getRole() === "Manager") {
                 return `<div class="manager cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Manager</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email:${person.email}</li>
                         <li class="list-group-item border border-dark">Office Number: ${person.officeNumber}</li>
                     </ul>
                 </div>
             </div>`
                 
             } else if (person.getRole() === "Intern") {
                 return `<div class="intern cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Intern</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email:${person.email}</li>
                         <li class="list-group-item border border-dark">School: ${person.school}</li>
                     </ul>
                 </div>
             </div>`

             } else {
                 return `<div class="engineer cardDisplay card text-white bg-primary mb-3" style="max-width: 25rem;">
                 <div class="card-header bg">${person.name}
                     <p>Engineer</p>
                 </div>
                 <div class=" card-body bg-light text-dark">
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item border border-dark">ID: ${person.id}</li>
                         <li class="list-group-item border border-dark">Email: <a target="_blank" href= "mailto:${person.email}"</a></li>
                          <li class="list-group-item border border-dark">GitHub: <a target="_blank" href= "https://github.com${person.github}">${person.github}</a></li>
                     </ul>
                 </div>
             </div>`
             }
         })
         .join("")
        }
 
     </div>
 </body>
 </html>`
 } 
 
 module.exports= generateHTML
 
 
 
 
 
 
 
 
 
 
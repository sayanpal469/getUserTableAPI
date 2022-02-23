const addUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const tableContainer = document.getElementById('table-body');
        
        for (const user of data) {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
          </tr>
            `
            tableContainer.appendChild(tr)
        }
    })
}

function clearAll(){
    const tableContainer = document.getElementById('table-body')

    tableContainer.style.display = 'none'
}
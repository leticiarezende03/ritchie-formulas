const axios = require('axios')


function Run(CLUBHOUSE_API_TOKEN) {


    //API AXIOS

    axios.defaults.baseURL = 'https://api.clubhouse.io/api/v3';
    axios.defaults.headers.common['Clubhouse-Token'] = CLUBHOUSE_API_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    
    const checkArchived = (project) => {
        return !project.archived
    }

    axios.get('/projects', {})
    .then(response => {
        const projects = response.data
        console.log(projects.filter(checkArchived))
    })
    .catch(error => {
        console.log(error);
    })

}

const formula = Run
module.exports = formula

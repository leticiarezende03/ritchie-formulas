const axios = require('axios')


function Run(CLUBHOUSE_API_TOKEN, PROJECT_NUMBER, STORIE_NAME, DESCRIPTION, STORY_TYPE) {


    //API AXIOS

    axios.defaults.baseURL = 'https://api.clubhouse.io/api/v3';
    axios.defaults.headers.common['Clubhouse-Token'] = CLUBHOUSE_API_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.post('/stories',{
        name: STORIE_NAME,
        project_id: PROJECT_NUMBER,
        description: DESCRIPTION,
        story_type: STORY_TYPE
    })
    .then(response => {
        console.log('Your Storie was added');
    })
    .catch(error => {
        console.log(error);
    })
}
const formula = Run
module.exports = formula

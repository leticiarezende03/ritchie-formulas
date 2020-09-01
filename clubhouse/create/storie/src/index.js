const run = require("./formula/formula")

const CLUBHOUSE_API_TOKEN = process.env.CLUBHOUSE_TOKEN

const STORIE_NAME = process.env.STORIE_NAME

const PROJECT_NUMBER = parseFloat(process.env.PROJECT_NUMBER)

const DESCRIPTION = process.env.DESCRIPTION

const STORY_TYPE = process.env.STORY_TYPE

run(CLUBHOUSE_API_TOKEN, PROJECT_NUMBER, STORIE_NAME, DESCRIPTION, STORY_TYPE)

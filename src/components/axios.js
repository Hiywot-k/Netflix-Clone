import axios from "axios"

// this page to start up our axios when it is called,it always start using the baseUrl

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance
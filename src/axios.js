import axios from "axios";

const instance=axios.create({
    baseURL:'https://us-central1-clone-aab06.cloudfunctions.net/api'
});
export default instance;


// http://localhost:5001/clone-aab06/us-central1/api
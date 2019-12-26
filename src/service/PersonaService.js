import axios from 'axios';

export class PersonaService {
    baseUrl = "http://localhost:8080/api/v1/";

    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }
}
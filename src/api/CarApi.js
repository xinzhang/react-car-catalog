
import fetch from './fetch'


export default class CarApi {    

    static async getAllMakers() {
        return fetch('/api/maker');
    }

    static async getModelsByMakerId(makerId) {
        return fetch(`/api/maker/${makerId}`);
    }

    static async getCarOfWeek() {
        return fetch('/api/carOfWeek');
    }

    static async getModelById(modelId) {
        return fetch(`/api/model/${modelId}`)
    }

}
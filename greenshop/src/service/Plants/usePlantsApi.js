import api from "../api";

const usePlantssApi = {
    getPlants: () => api.get("/data"),
    getOnePlant: (id) => api.get(`/data?slug=${id}`)
}

export default usePlantssApi;
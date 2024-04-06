import api from "../api";

const useUserApi = {
    getUser: ({ userName, password }) => api.post("/users", { userName, password }),
    regiserUser: ({ userName, email, password }) => api.post("/users", { userName, email, password }),
}

export default useUserApi;
export const requestRefresh = async client => {
    // SỬ dụng client 
    try {
        const { refresh_token: refreshToken} = JSON.parse(localStorage.getItem("login_token"))
        if (!refreshToken) {
            throw new Error("refresh token not empty")
        }
        const { response, data } = await client.post("/auth/refresh-token", {
            refreshToken
        })

        saveToken(data) //lưu token vào Storage
        return data;
    } catch (e) {
        console.log(e)
    }
}

const saveToken = (token) => {
    localStorage.setItem("login_token", JSON.stringify(token));
} 
//  default requestRefresh
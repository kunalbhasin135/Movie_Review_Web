export const mutationLogin = async () => {
    const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers :{
                Authorization: 
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTMxYWU2ODIyOWRhZjRmNDgzMTNlNTEyMGVkMDA2YiIsIm5iZiI6MTcyNDQxMjk5MC42OTE3NDYsInN1YiI6IjY2Yzg2ZDY3ODUzNDU2MGVlYWQ4MGQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GYdNjm-0ShmSUM8cIY-DUG_Aqh-xLwl1BtliIWv1T_Y'
            }
        }
    )

    const data = await res.json()
    console.log(data)
    return data 
}
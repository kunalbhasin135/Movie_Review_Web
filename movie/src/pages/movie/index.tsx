import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Grid, Header, Loader, Segment, Image, List } from "semantic-ui-react"
import { fetchMovieDetails } from "./query"

export const Movie = () => {

    const{id} =useParams<string>()

    if(!id) {
        return <div>Invalid Movie ID</div>
    }

    const {data , isLoading } = useQuery({queryKey: ["movie"] ,
         queryFn: () => fetchMovieDetails(id)})


        if(isLoading) {
            return <Loader active />
        }

    return <div style={{marginTop : 50}}>
        <Segment>
            <Header>{data.title}</Header>
            <Grid columns={2} divided textAlign="left" style={{marginTop : 20}}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                            <Image size= "medium" centered src={"https://image.tmdb.org/t/p/original/"+ data.poster_path}  />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <List>
                            <List.Item>
                                <List.Header>Is The Movie For Adults:</List.Header>
                                {data.adult? "Yes" : "No"}
                            </List.Item>
                            <List.Item>
                                <List.Header>Budget : </List.Header>
                                {data.budget}
                            </List.Item>
                            <List.Item>
                                <List.Header>Genres: </List.Header>
                                {data.genres.map((genre: any) => <List.Item key={genre.id}>{genre.name}</List.Item>)}
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        </div>
}
import { gql } from "@apollo/client/core"

export const GET_ANIME_QUERY = gql`
query getAnimeList($page:Int, $perPage: Int){
    Page(page:$page, perPage:$perPage){
      media(type: ANIME, sort: TRENDING_DESC){
        id
        title{
          romaji
        }
              coverImage{
          large
        }
        description
        seasonYear  
        averageScore
        duration  
        episodes 
      }
    }
  }
`
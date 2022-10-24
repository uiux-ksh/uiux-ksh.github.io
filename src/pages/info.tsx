import React, {FunctionComponent} from "react";
import {graphql} from "gatsby";
import styled from '@emotion/styled';
import {Global,css} from "@emotion/react";

const globalStyle = css`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-size: 20px;
}
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`


const Text1 = styled.div<{ disable:boolean }>`
  font-size: 20px;
  font-weight: 700;
  color:${({disable }) => ( disable ? 'red' : 'blue')};
  
`

const Text2 = styled(`div`)<{ disable:boolean }>(({disable}) => ({
    fontSize:`15px`,
    color: disable ? 'green' : 'pink',
}))

type infoPageProps = {
    data:{
        site:{
            siteMetadata:{
                title:string
                description:string
                author:string
            }
        }
    }
}

const InfoPage: FunctionComponent<infoPageProps> = function ({data:{site:{siteMetadata:{title,description,author}}}}) {

    return(
        <div>
            <Global styles={globalStyle} />
            {title}
            <Text1  disable={true}>{description}</Text1>
            <Text2  disable={true}>{author}</Text2>

        </div>
    )
}

export  default  InfoPage;


export const metadataQuery = graphql`
{
  site{
    siteMetadata{
        title
        description
        author
    }
  }
}
`

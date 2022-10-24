import React,{FunctionComponent} from "react";
import styled from '@emotion/styled';
import PostItem from "components/Main/PostItem";


//필요한것 포스트제목,업로드날짜,카테고리목록,포스트요약,썸네일이미지,포스트링크
const POST_ITEM_DATA = {
    title:'넷플릭스 (자기개발공부)',
    date:'2020.10,01',
    categories:['프론트엔드','몽고DB','Next.js','tailwindCSS'],
    summary: '서버기초를 배우기위해서 프로젝트를 만들면서 몽고DB에 회원데이터를 저장하는 연습을하였고 슬라이드 배너를 클릭시 영상전체화면으로 나오게구현하였습니다.',
    thumbnail:'https://i.imgur.com/fAec5jZ.png',
    link: 'https://uiuxksh-4nrc2obzc-uiux-ksh.vercel.app/',
}
const RIOT_PC = {
    title:'라이엇 PC방프로젝트',
    date:'2022.06.30',
    categories:['퍼블리싱','프론트엔드','리액트','반응형'],
    summary: '라이엇게임즈 리그오브레전드 별수호자 PC방이벤트에 퍼블리싱 및 프론트개발에 참여하였습니다.',
    thumbnail:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blted8ffd99bee759fb/62bcf7b567c84b506fe79c88/01_notice_header.jpg',
    link:'https://events.kr.riotgames.com/starguardian-pcb'
}
const RIOT_STAR = {
    title:'라이엇 별수호자 포로상점1차,2차',
    date:'2022.06.30 ~ 2022.08.10',
    categories:['퍼블리싱','리액트','반응형'],
    summary:'라이엇게임즈 별수호자 포로상점이벤트에 레이아웃과 프론트엔드 개발 퍼블리싱비중이 70% 프론트 30%',
    thumbnail:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltef001192be6cd232/62ce8c6c30ed0e3641c62a9d/Header.jpg',
    link:'https://events.kr.riotgames.com/porostore2',
}
const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList:FunctionComponent = function () {
    return(
        <PostListWrapper>
          <PostItem {...RIOT_PC} />
          <PostItem {...RIOT_STAR} />
          <PostItem {...POST_ITEM_DATA} />
          <PostItem {...POST_ITEM_DATA} />
        </PostListWrapper>
    )
}
export default  PostList;
# Youtube Clone Site 📺


#### 프로젝트 이름
Youtube clone site

#### 사용 언어
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=javascript&logoColor=black">

#### 구현 사항
* index 페이지에 로드되는 영상들
  - 가장 인기있는 동영상들
  - 썸네일
  - 영상 제목
  - 채널 이름
  - 업로드된 시간
 
* 키워드로 검색된 영상들
  - 썸네일
  - 영상 제목
  - 채널 이름
  - 업로드된 시간
 
* 영상 상세 페이지
  - 영상
  - 영상 제목
  - 채널 이름
  - 영상 설명
  - 영상 관련 댓글들
  - 채널의 다른 동영상들

* 영상 댓글들
  - 계정 이미지
  - 작성자 이름
  - 댓글을 작성한 시간
  - 댓글
  - 좋아요 개수
 
* 채널과 관련된 영상들
  - 썸네일
  - 영상 제목
  - 채널 이름
  - 업로드된 시간
 
#### 주요 내용
* `createBrowserRouter` hook으로 router를 생성해서 루트 경로의 컴포넌트와 Outlet에 보여질 컴포넌트들을 배열에 객체로 설정한다.
* 영상을 클릭하거나 검색어를 입력했을 때 해당 영상의 관련 페이지로 `useNavigate`를 사용해서 이동한다.
*  url에서 keyword를 `useParams`로 받아와서 키워드에 관련된 영상들을 찾는 search 함수에 사용한다.
* Youtube open API는 하루 할당량이 정해져있어서 실제 API로 개발을 하다보면 할당량 초과로 개발에 어려움이 생긴다. 그래서 `useQuery`의 쿼리함수로 데이터를 어디서 가져올지 정할때 실제 API에서 가져오는 youtubeClient와 Mock Data(json 파일들)를 활용해서 모의로 테스트 해볼 수 있는 fakeyoutubeClient 두 버전으로 만든 후에 client만 변경해줬다.
* fakeyoutubeClient에서는 axios.get으로 json 파일들을 받아오고 youtubeClient에서는 axios.create로 url을 생성한 후 param로 미리 생성해 둔 key를 전달해서 실제 Youtube API를 받아온다.
* darkmode도 사용할 수 있도록 DarkModeProvider로 전체를 감싸고 queryClient는 Outlet의 자식요소들만 사용할거기 때문에 Outlet만 감싸줬다.
* 영상이 업로드된 시간을 '~전'처럼 표기하기 위해서 timeago 라이브러리를 사용해서 데이터를 전달한 후 언어를 한국어로 바꿨다.
* tailwind를 사용해서 sm, lg, xl, 2xl 화면 크기 별로 grid 개수를 나눠서 반응형으로 구현했다

#### 문제 해결
* Youtube API에서 relatedToVideoId 속성 지원을 중단해서 영상과 관련된 영상을 가져올 수 없었다.
  - relatedToVideoId 대신에 channelId를 전달해서 해당 채널의 다른 영상들을 불러왔다.
* 영상 상세 페이지로 이동한 후 해당 비디오에 대한 정보를 다시 네트워크 통신을 통해 받아오지 않고 데이터로 전달받을 수 있는 방법이 있을 것 같았다
  - video 객체 안에 이미 모든 정보가 담겨있기 때문에 navigate로 페이지 이동할때 두번째 인자 state에 video 객체를 전달해주었다. 이동해서는 useLocation으로 state를 받으면 된다.
* 영상 제목들 중에 #&39가 포함되어있는 경우가 있었다.
  - 검색해보니 문자를 10진수 코드 포인트로 인코딩하는 과정에서 나타난 HTML 문자 참조였다. he 라이브러리를 다운받아서 title을 decode한 후 출력할 수 있도록 하였다.
* 영상의 모든 댓글들을 가져올 수 없었다.
  - Youtube API Comment 속성에서 maxResults로 가져올 댓글 개수를 정할 수 있는데 default는 20개이고 아니면 따로 정해야한다. 그래서 댓글 전체를 가져올 수 없다.
 
#### 배포 링크📌
 https://radiant-puffpuff-63b6f2.netlify.app

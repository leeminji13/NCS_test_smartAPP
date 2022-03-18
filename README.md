# NCS_test_smartAPP
## 문화앱 구현 평가</br>
### git</br>
  git init 후 브런치,유저네임,유저이메일 설정한다</br>
  .gitignore에 node_modules/를 추가(무겁지 않도록)</br>
### node setting</br>
  npm init -> name을 설정해준다</br>
  노드에서 서버연동에 필요한 모듈을 설치한다</br>
  ![노드디펜던시](https://user-images.githubusercontent.com/96039081/158966924-9b34ed6d-6598-4e94-9321-35461dd53e91.JPG)</br>
  </br>
  ### react</br>
  리액트를 설치할 폴더 생성 후</br>
  npx create-react-app front</br>
  리액트에서 서버연동에 필요한 모듈을 설치한다</br>
  ![리액트axios](https://user-images.githubusercontent.com/96039081/158967027-2560c736-efbd-49dc-bf9f-e65df17aa531.JPG)</br>
  "proxy"도 작성해준다 </br>
  ![리액트 proxy연결](https://user-images.githubusercontent.com/96039081/158967079-48b4dd55-5fc5-4125-ba8b-e7692683dfd6.JPG)</br>
</br>
**cd ../다시 노드로 돌아가기**</br>
  메인페이지로 사용할 js파일 만들고</br>
  node pakage.json에서 main,start를 만든 js폴더이름으로 변경한다</br>
   node pakage.json에 "script"를 작성해 준다(오타조심)</br>
   ![nodescript](https://user-images.githubusercontent.com/96039081/158965337-da905e49-5fbe-493e-9f77-6124ba93b816.JPG)</br>
   </br>
   메인페이지로 사용할 js파일 minji.js에 기본 세팅 후에 서버가 구동되는지 확인한다.</br>
   </br>
   ### 라우팅 </br>
  **1.최소한의 프로그램 세팅**</br>
     /postsend -> routes/postsend.js  </br>
/getsend -> routes/getsend.js  </br>
/sqlsend -> routes/sqlsend.js  </br>
</br>
**2.메인페이지lmj.js와 연결**</br>
-각 페이지 정보 불러오기</br>
</br>
**3.db정보 연결할 폴더 만들기->안에 파일생성 후 db정보 입력(워크벤치에서 정보 확인)**</br>
 -db정보는 getsend파일에서 불러온다</br>
 ![getsend](https://user-images.githubusercontent.com/96039081/158967101-c7227d74-9f53-4867-9cf7-55626e941705.JPG)
 </br>
 
 **설정한 localhost로 들어가서 잘 연동되는지 확인하기**</br>
 ![sql서버연결확인](https://user-images.githubusercontent.com/96039081/158967167-5611671b-d646-4312-8821-91532bdd9d88.JPG)</br>
 
 
 

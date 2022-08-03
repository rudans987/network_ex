
import React from 'react';
import axios from 'axios';

function App() {

  //fetch 쓰는법
  // const callSomething = async () => {
  //   let data = {
  //       "id": 6,
  //       "day": "일", 
  //       "sleep_time": "10:00"
  //     };
  //   let response = await fetch('http://localhost:5001/sleep_times', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //     console.log(response);
  // }
  

  //axios 사용법: 둘중 하나 써서 밑에 useEffect안에서 함수 호출
  // const callSomethingAxios = () => {
    // axios 사용법 1-config로 GET 요청해보기
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:5001/sleep_times',
    // }).then((response) => {
    //   console.log(response);
    // });

    //axios 사용법 2-요청 메서드로 GET 요청해보기
    // axios.get("http://localhost:5001/sleep_times").then((response) => {
    //     console.log(response);
    //   });

     //axios 사용법 2-요청 메서드로 POST 요청해보기
  //   let data = {
      
  //     day: "토", 
  //     sleep_time: "10:00"
  //   };
    
  //   axios.post("http://localhost:5001/sleep_times", data).then((response) => {
  //     console.log(response);
  //   });

  // }


  React.useEffect(()=> {
    // callSomething();
    // callSomethingAxios(); 

    
    //xmlhttp쓰는법
//     let xhr = new XMLHttpRequest();
//     //요청 만들기
//     xhr.open('GET', 'http://localhost:5001/sleep_times');
//     //요청 보내기
//     xhr.send();

//     // 두가지 방법으로 응답을 받을 수 있어요! 하나는 onreadystatechange를 쓰는 방법,
// // 다른 하나는 onload를 쓰는 방법입니다.

// // 1. 
// // XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 
// // 콜백함수(이벤트 핸들러)를 호출해요!
// xhr.onreadystatechange = function (e) {
//   // 이 함수는 Response가 클라이언트에 도달하면 호출됩니다!

//   // readyStates는 XMLHttpRequest의 상태(state)를 반환해요
//   // readyState :::
//   // UNSENT = 0; // XMLHttpRequest.open() 메소드 호출 이전
// 	// OPENED = 1; // XMLHttpRequest.open() 메소드 호출 완료
// 	// HEADERS_RECEIVED = 2; // XMLHttpRequest.send() 메소드 호출 완료
// 	// LOADING = 3; // 응답 기다리는 중(서버 응답 중(XMLHttpRequest.responseText 미완성 상태))
//   // DONE = 4; // 서버 응답 완료
//   if (xhr.readyState !== XMLHttpRequest.DONE) return;

//   // status는 response 상태 코드를 반환 : 200 => 정상 응답
//   if(xhr.status === 200) {
//     console.log(xhr.responseText);
//   } else {
//     console.log('Error!');
//   }
// };

// //2. 
// // load 이벤트는 서버 응답이 완료된 경우에 발생해요!
// xhr.onload = function (e) {
//   // status는 response 상태 코드를 반환 : 200 => 정상 응답
//   if(xhr.status === 200) {
//     console.log(xhr.responseText);
//   } else {
//     console.log('Error!');
//   }
// };

  }, []);
  return (
    <div className="App">
    
    </div>
  );
}

export default App;

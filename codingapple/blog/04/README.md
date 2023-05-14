## array, object state 변경하기

- array/object 다룰 때 원본은 보존하는게 좋기 때문에, copy 문법 사용

<h4>copy문법</h4>

```javaScript
  let copy = a; //a에 있던 변수를 copy에 넣어줌
  copy[0] = '강남 카페 추천'; //copy본 수정
  글제목변경(copy);  //복사한 데이터 작성
```
이렇게 하면 버튼 눌러도 작동하지 않기 때문에 하단 코드로 작성
```javaScript
  let copy = [...a]; 
```

1. state변경함수 특징

- 맨 위에서 선언한 기존 state와 신규 copy state가 같을 경우 변경 안됨(같으면 굳이 변경할 필요 없다고 인식)
<br>

2. array/object 특징

```javaScript
  let arr = [1,2,3];  //arr 변수에는 [1,2,3]이 들어가는것이 아닌, [1,2,3]이 어디 있는지 알려주는 화살표만 들어있음
```
```javaScript
  let copy = [...a];  //... 는 괄호 제거하고 다시 씌워 독립적인 array 사본이 생성되는 것이기 때문에 버튼 누르면 작동됨
```

<br>
<h4>→기존 state가 array/object면 독립적 카피본을 만들어서 작업해야함</h4>

----------------------------------

*<h4>숙제</h4>*
버튼 새로 만들어서 누르면 글제목 가나다순 정렬 기능 만들기

```javaScript
  <button onClick={()=>{
        let copy = [...a];
        copy.sort();  //.sort() 함수를 활용하면 문자열 오름차순으로 정렬
        글제목변경(copy);
      }}>
        가나다순 정렬
  </button>
```

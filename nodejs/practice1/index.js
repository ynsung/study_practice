const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

// 특정 요청에만 응답하고 싶을 때 cors 사용
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

// dog 라우팅으로 json 문서 출력
app.get('/sound/:name', (req, res) => {
  const { name } = req.params // value 값을 name 변수에 바로 넣는 방법
  
  if(name == "dog")
    res.json({'sound': '멍멍'})
  else if(name == "cat")
    res.json({'sound': '야옹'})
  else if(name == "pig")
    res.json({'sound': '꿀꿀'})
  else res.json({'sound': '알수없음'})
})

// port에 접속하면 메시지 출력
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
// **********GET 요청 변수 처리하는 2가지 방법**********

// 1. params를 이용해서 변수에 값 입력
app.get('/userp/:id', (req, res) => {
  const q = req.params
  console.log(q.id)
  //url에 http://localhost:3000/userp/jocoding 입력
  res.json({'userid': q.id})
})

// 2. query를 이용해서 변수에 값 입력
app.get('/userq/:id', (req, res) => {
  const q = req.query
  console.log(q.q)
  console.log(q.name)
  console.log(q.age)
  // ? 뒤에 key=value&key=value 형식으로 입력
  // url에 http://localhost:3000/userq/a=lucas?q=jocoding&name=jo&age=20 입력
  res.json({'user': q.q, 'username': q.name, 'userage': q.age})
})



// **********POST 요청 변수 처리하는 2가지 방법**********
// 1. params는 GET과 동일
// 2. body를 이용해서 변수에 값 입력
// POST는 주소창이 아니라 AXIOS 등을 사용해야 함

app.use(express.json())
app.post('/user/:id', (req, res) => {
  const p = req.params
  console.log(p)
  const b = req.body
  console.log(b)

  res.send({'message': 'Hello World!'})
})
*/
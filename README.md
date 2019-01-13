# NCNU-course-API

## Intro
學校課程資訊的 API 給了一份 [XML](https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=107&semester=1&unitId=all) ，使用起來相當不便，於是開始了自行打造好用的 RESTful API 想法

## Usage

- 取得前n筆課程資訊
  - `/api/<數量>`
  - ex: `/api/20`
- 取得全部課程資訊
  - `/api/all`
- 指定學院，取得該學院全部課程資訊
  - `/api/faculty/<學院名稱>`
  - ex: `/api/faculty/教育學院`
- 指定系所，取得該系所全部課程資訊
  - `/api/department/<系所名稱>`
  - ex: `/api/department/資管系`
- 指定學院，取得全部系所列表
  - `/api/depList/<學院名稱>`
  - ex: `/api/depList/人文學院`
- 指定課號，取得該課程資訊
  - `/api/id/<課號>`
  - ex: `/api/id/010036`
- 指定教師，取得該教師全部課程
  - `/api/teacher/<教師名字>`
- 指定課程名稱，取得匹配字串
  - `/api/course/<課程名字>`
  - 可用關鍵字

## Deploy ( server + mongodb ) (not support 1072)

`export NODE_ENV=docker`

`docker-compose up -d`

### Deploy step by step ( only mongodb )

1. run mongodb 

`docker run -p 27017:27017 -d --entrypoint=mongod mongo --bind_ip_all`

2. copy data to container

`docker cp ./data/course_data.json <container-name-or-id>:/tmp/course_data.json`

3. import data to mongodb

`docker exec -it <container-name-or-id> mongoimport  --db ncnu --collection class --file tmp/course_data.json --jsonArray`
  
4. run web server (resful api)

`node server/app.js`
or 
`pm2 start server/app.js`

5. visit `http://127.0.0.1:5488/api/5`


*if you want to get data by your self, you can run*

`node data/getData.js`

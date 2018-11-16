# NCNU-course-API

## Intro
學校課程資訊的 API 給了一份 [XML](https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=107&semester=1&unitId=all) ，使用起來相當不便，於是開始了自行打造好用的 RESTful API 想法

## Usage

- get first 20 data
  - `/api`
- 取得全部課程資訊
  - `/api/all`
- get data with specific faculty
  - `/api/faculty/:fac`
- get data with specific department
  - `/api/department/:dep`
- 指定學院取得系所列表
  - `/api/getDep/:fac`
  
  

## Deploy

1. run mongodb 
> docker run -p 27017:27017 -d --entrypoint=mongod mongo --bind_ip_all

2. copy data to container
> docker cp ./data/course_data.json <container-name-or-id>:/tmp/course_data.json

3. import data to mongodb
> docker exec -it <container-name-or-id> mongoimport  --db ncnu --collection class --file tmp/course_data.json --jsonArray
  
4. run web server (resful api)
> node server/app.js

5. visit `http://127.0.0.1:5488/api`


*if you want to get data from your self, you can run*
> node data/getData.js

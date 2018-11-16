# NCNU-course-API
🏫 A simple course API for NCNU

## Usage

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

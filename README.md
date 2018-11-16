# NCNU-course-API
🏫 A simple course API for NCNU

## Usage
docker run -p 27017:27017 -d --entrypoint=mongod mongo --bind_ip_all
docker cp ./data/course_data.json <container-name-or-id>:/tmp/course_data.json
docker exec -it <container-name-or-id> mongoimport  --db ncnu --collection class --file tmp/course_data.json --jsonArray
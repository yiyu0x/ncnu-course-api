FROM mongo
COPY data/course_data.json /tmp/course_data.json
CMD mongoimport  --db ncnu --collection class --file /tmp/course_data.json --jsonArray
EXPOSE 27017
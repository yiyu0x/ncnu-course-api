FROM mongo
COPY ./course_data.json /tmp/course_data.json
CMD mongoimport --host mongodb --db ncnu --collection class --file tmp/course_data.json --jsonArray
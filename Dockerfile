FROM node:20
WORKDIR /home/darshan/app
COPY app /home/darshan/app/
RUN npm install
CMD [ "npm", "start" ]

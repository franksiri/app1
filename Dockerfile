FROM node:7

ADD app.js /app3.js

ENTRYPOINT ["node", "app3.js"]
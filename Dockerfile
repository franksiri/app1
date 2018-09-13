FROM node:7

ADD app3.js /app3.js

ENTRYPOINT ["node", "app3.js"]
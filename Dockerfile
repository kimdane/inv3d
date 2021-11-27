FROM node:17
LABEL maintainer="github.com/kimdane"

COPY --chown=node:node ./package*.json /app/

RUN npm install

COPY --chown=node:node . /app/

CMD [ "node", "restmongo.js" ]

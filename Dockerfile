FROM node:4

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies only if package.json got changed
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /usr/src/app/

# Copy app files
RUN cp /tmp/package.json /usr/src/app/

WORKDIR /usr/src/app

# Bundle app source
COPY src /usr/src/app/src

EXPOSE 3000
CMD [ "npm", "start" ]
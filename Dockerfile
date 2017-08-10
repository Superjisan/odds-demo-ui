FROM node:boron

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY npm-shrinkwrap.json .
COPY bower.json .

RUN npm install
RUN npm install --global bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc

RUN bower install

# Bundle app source
COPY . .

# Expose port
EXPOSE 8000

CMD [ "npm", "start" ]

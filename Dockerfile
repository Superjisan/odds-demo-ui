FROM node:8.3.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY npm-shrinkwrap.json .
COPY bower.json .

RUN npm install --global bower
RUN npm install
RUN echo '{ "allow_root": true }' > /root/.bowerrc

# Bundle app source
COPY . .

# Expose port
EXPOSE 8000

CMD [ "npm", "start" ]

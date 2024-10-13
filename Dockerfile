# FROM node:7 
# WORKDIR /app 
# COPY package.json /app 
# COPY yarn.lock /app
# RUN yarn install 
# COPY . /app 
# CMD [ "yarn", "start" ]
# EXPOSE 8000

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json /app

# Copy the yarn.lock files to the container
COPY package*.json /app

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . /app

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run your app
CMD ["yarn", "start"]



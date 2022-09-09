# expceljp-api

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3100
$ nodemon server.js

```
>____

## Docker

<details>

<summary>Click here to see detail of docker deployment</summary>

```sh

# This current docker use Windows 10 + WSL2 some command may different from Linux

# First preparation
create Dockerfile and write command to create docker image

# Second preparation
create .dockerignore to ignore some files (this .dockerignore do like .gitignore) in this case ignore node_modules

# create Docker image
$ docker build -t dockerImageName .
# You can define your docker image name instead of dockerImageName

# you can see a list of Docker image on your machine by
$ docker images
# It will show list of docker images that available in this current machine

# There are 3 columns you must interested in 
# First REPOSITORY (Name of Docker image)
# Second TAG (this is version of Docker image)
# Third IMAGE ID
# You can run docker image by these 3 columns

There are 2 ways to run Docker image
1. Normal run

# You can run Docker image by DockerImageName and DockerImageTAG
$ docker run -p 3000:3000 DockerImageName:DockerImageTAG

# You can run Docker image by IMAGE ID
$ docker run -p 3000:3000 DockerImageID

2. Background run

# You can run Docker image by DockerImageName and DockerImageTAG
$ docker run -d -p 3000:3000 DockerImageName:DockerImageTAG

# You can run Docker image by IMAGE ID
$ docker run -d -p 3000:3000 DockerImageID

# When docker image run you can access website at
localhost:3000

# Show current running containers and stop containers

Show current running Docker container
$ docker ps
# It will show current running Docker containers you must focus on CONTAINER ID

Stop containers
$ docker container stop CONTAINERID
#You only use Container ID to stop container (cannot use container image name)

```

</details>

>____

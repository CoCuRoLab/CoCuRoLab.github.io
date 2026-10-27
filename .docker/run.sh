#! /bin/bash

# name of image
IMAGE=lab-website-renderer:latest

# name of running container
CONTAINER=lab-website-renderer

# choose platform flag
PLATFORM=""

# default vars
DOCKER_RUN="docker run"
WORKING_DIR=$(pwd)

# fix windows faux linux shells/tools
if [[ $OSTYPE == msys* ]] || [[ $OSTYPE == cygwin* ]]; then
    DOCKER_RUN="winpty docker run"
    WORKING_DIR=$(cmd //c cd)
fi

# export corporate proxy root certificate (e.g. Zscaler) from macOS keychain
# so the container can make https requests through the proxy
mkdir -p ./.docker/certs
if [[ $OSTYPE == darwin* ]]; then
    security find-certificate -a -c Zscaler -p > ./.docker/certs/zscaler.crt 2> /dev/null
    [ -s ./.docker/certs/zscaler.crt ] || rm -f ./.docker/certs/zscaler.crt
fi

# build docker image
docker build ${PLATFORM} \
    --tag ${IMAGE} \
    --file ./.docker/Dockerfile . && \

# run built docker image
${DOCKER_RUN} ${PLATFORM} \
    --name ${CONTAINER} \
    --init \
    --rm \
    --interactive \
    --tty \
    --publish 4000:4000 \
    --publish 35729:35729 \
    --volume "${WORKING_DIR}:/usr/src/app" \
    ${IMAGE} "$@"

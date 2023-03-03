#!/bin/sh

if [ ! -e ".git" ]; then
	echo "Error: This must be run from the root of the repository"
	exit 1
fi

docker-compose -f deploy/local-infra/docker-compose.yml down

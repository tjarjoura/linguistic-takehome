#!/bin/bash

DATA_FILE=data.gql

# Test storing huge documents in the DB
python generate_gql.py > $DATA_FILE

# Copied from NestJS GraphQL playground
curl 'http://localhost:3000/graphql' \
	-H 'Accept-Encoding: gzip, deflate, br' \
	-H 'Content-Type: application/json' \
	-H 'Accept: application/json' \
	-H 'Connection: keep-alive' \
	-H 'DNT: 1' \
	-H 'Origin: http://localhost:3000' \
	-d @$DATA_FILE \
	--compressed \
	-s

rm $DATA_FILE

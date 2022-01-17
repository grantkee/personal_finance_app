# full path for this Makefile
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
BASE_DIR=$(shell basename $(ROOT_DIR))

NODE_VERSION=14.17.1

.DEFAULT: help

dev: 
		docker-compose -f docker-compose.yaml --env-file .env up --build --force-recreate --remove-orphans -d ;

up:
		docker-compose -f docker-compose.yaml --env-file .env up --force-recreate --remove-orphans -d ;

down:
		docker-compose stop ;
		docker-compose rm -fv;

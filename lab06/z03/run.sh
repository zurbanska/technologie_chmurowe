#!/bin/bash

docker network create --driver bridge frontend_network 
docker network create --driver bridge backend_network 

docker run -d --name database --network backend_network -p 27017:27017 mongo
docker build -t z03_frontend ./frontend
docker build -t z03_backend ./backend

docker run -dit --name backend --network backend_network -p 3000:3000 z03_backend
docker network connect frontend_network backend

docker run -dit --name frontend --network frontend_network -p 3001:3001 z03_frontend


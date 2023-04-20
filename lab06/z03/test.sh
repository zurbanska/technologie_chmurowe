#!/bin/bash

docker exec frontend curl backend:3000/data
docker exec backend curl frontend:3001
docker exec backend ping database
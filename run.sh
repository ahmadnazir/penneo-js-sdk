#!/bin/bash
docker run -it -v `pwd`:/app -u `id -u $USER` google/nodejs  /bin/bash

# docker-compose-example

This repo provides a basic example of how to configure a containerized nginx server with multiple apps. 

Run `docker-compose up` to start the nginx server along with 4 different instances of the Flask `color-service`. 

If you run `docker ps`, you should see something like this:

```
CONTAINER ID   IMAGE                            COMMAND                  CREATED         STATUS         PORTS                NAMES
f93fbb89173a   nginx:latest                     "/docker-entrypoint.…"   9 seconds ago   Up 6 seconds   0.0.0.0:80->80/tcp   production_nginx
4bbc02bf079c   docker-compose-example_default   "gunicorn --bind 0.0…"   9 seconds ago   Up 6 seconds   5000/tcp             default
e58325848640   docker-compose-example_green     "gunicorn --bind 0.0…"   9 seconds ago   Up 6 seconds   5000/tcp             green
f8c0a8124784   docker-compose-example_blue      "gunicorn --bind 0.0…"   9 seconds ago   Up 6 seconds   5000/tcp             blue
0dea216681da   docker-compose-example_red       "gunicorn --bind 0.0…"   9 seconds ago   Up 6 seconds   5000/tcp             red
```

The nginx server is exposed on port 80 and can be accessed on your localhost. When receiving requests on `/`, `/green/`, `/blue/`, or `/red/`, nginx will proxy requests to the hostname for each of the four Flask services, which is resolved to the IP address for each container by the interal DNS server used by Docker. 

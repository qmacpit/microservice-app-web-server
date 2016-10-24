## development

### run mongo DB

```
docker run --name mongo-db -d -p 27017:27017 mongo
```

### build docker web app
```
docker build -t microservice-app/web:0.0.1 .
```

### run web app

```
 docker run --name web -d --link mongo-db:mongo-db -p 3000:3000 microservice-app/web:0.0.1
```

## running with docker compose

### building

```
docker-compose build
```
### running

```
docker-compose up
```
### deploy changes (in web)
```
docker-compose build web
docker-compose up --no-deps -d web
```
### scale web services
```
docker-compose scale web=2
```
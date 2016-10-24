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
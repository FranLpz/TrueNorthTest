# Skeleton project for Swagger
Asumptions
- postgres installed with postgis plugin
- rabbitmq-server installed

Run project
npm install 
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
swagger project start

To Open the API editor in a new terminal run
swagger project edit

sudo docker run --name rabbitmq-TN -p 5000:5672 -p 5001:15672 rabbitmq:3-management
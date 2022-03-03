build:
	npm install && docker-compose up --build

run:
	docker-compose up

start:
	docker-compose start

stop:
	docker-compose stop 

prune:
	docker system prune && docker volume prune

cypress-run:
	npx cypress run

cypress-open:
	npx cypress open
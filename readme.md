Deploy Notes

Commit Git Dev

Checkout Git Master

Git Merge Dev to Master

Import Environment in Front Client

Set up BASE_URL settings in Prod and Non-Prod Environments on all services

export const environment = {
  production: true,
  BASE_URL: ''
};

ng build --env --aot=false

manually transfer dist into server/public

check 3000 to see that everything works in the back-end

create heroku project

connect to heroku git: remote  -a bikeamor  <---heroku app name

git remote -v  <-- to check if the heroku repo is present

git commit -am "preparing heroku deploy"

git push origin master

git subtree push --prefix=Server heroku master <---name of the back end folder, DO NOT PUSH Client

check for errors by running the app in heroku

heroku logs for extra detail






sh deploy.sh in terminal

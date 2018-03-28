cd Client
rm -rf dist
echo 'Building client...'
ng build --env=prod --aot=false
cd ..
echo "Copy files to public..."
rm -rf ./Server/public
cp -r ./Client/dist ./Server/public

git add .
git commit -m "Building sources commit"
git subtree push --prefix=Server heroku master
echo "Done!"
cd Client
rm -rf dist
echo 'Building client...'
ng build --env --aot=false
cd ..
echo "Copy files to public..."
rm -rf ./Server/public
cp -r ./Client/dist ./server/public

git add .
git commit -m "Building sources commit"
git subtree push --prefix=Server heroku master
echo "Done!"
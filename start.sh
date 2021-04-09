cd app/api
pm2 start index.js

cd ..
cd ..

cd app/logs
pm2 start usage-logs.js

cd ..
cd ..

cd neuroneye
ng serve --open

# google-async-storage
Simple NodeJS app, to upload many files to Google Storage

To run this up, you must be had install nodeJS.

First Clone the repositorie to the local path. 

`cd google-async-storage && npm install`

now you need to create the node envirioments, `.env` file and complete with this variables.

```
apiKey=AIzaXXXXXXXXXXXXXXXXXXXXXX
authDomain=XXXXXXXXX.firebaseapp.com
projectId=XXXXXXXXXXX
storageBucket=XXXXXXXXXX.appspot.com
keyFile=./service-account-credentials.json
pathToUpload=/sku
localPath=/images
```

then to start, run node index.js and the app, goes to read all the images files into your local path, and upload to google storage. 
when this proccess finished, you have a new json file with the url of files uploaded

Have a nice work! 

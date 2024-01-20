# responsiveAndJs
#code execution flow
data.json has some data that needs to be fetched dynamically. This data has been kept in 
 key "data" so that upon fetching the api referrences to "data".

 #installing json server
 the json server is installed using npm install -g json-server to install it globally so that it will watch the data.json   and make it available over a host so as to make it an api accessible at localhost:3000 in this project

#app.js
axios is used to make https requests to the local server then the useEffect enhances fetching upon rendering.
setInfo updates the info state to this fetched data.
So data will be mapped from info state then to myData using that specific key which is vital in keeping track of the components.

![alt text](https://github.com/mcnentom/responsiveAndJs/blob/myapi1/src/Assets/SharedScreenshot.jpg)
![alt text](https://github.com/mcnentom/responsiveAndJs/blob/myapi1/src/Assets/SharedScreenshot1.jpg)

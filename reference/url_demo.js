const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);

//URL toString()
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Pathname (Filename in url)
console.log(myUrl.pathname);

//Serialized query (parameter in url)
console.log(myUrl.search);

//Params object (parameters in Object of URLSearchParams)
console.log(myUrl.searchParams);

//Add param (args: key, value)
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through/ Search for param in params 
myUrl.searchParams
.forEach((value, name)=>
    console.log(`${name}: ${value}`)
);
### **For Developers**

Install node_modules
```shell script
npm install
```

For running localhost (running watcher):
```shell script
npm run server:dev
```

For build files for server:
```shell script
npm run build:dev
```

#
#### .ENV file variables

``` REACT_APP_BASE_URL ``` - variable for base API url

#
#####Comments:

- We have in requirements that all graphic elements should be SVG’s.
But logo isn't SVG element and has a lot of space around.
It crashed spaces on UI and should be fixed by margin with - value or position absolute that is the bad code, so I decided to save it as png and cut unnecessary space
- background vector objects are different for mobile and desctop.
I used version from desktop for both responsive UI
- Seems this site should be 100vh, but design is wrong for 100vh. Everything to large to fit in 100vh. I did pixelPerfect so didn't do 100vh

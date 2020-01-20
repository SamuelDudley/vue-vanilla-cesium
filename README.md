# Vue vanilla cesium :icecream:

## Motivation
This repository is an effort to develop maintainable (from an application development perspective) interactions between more typical Vue components and a component built using a complex map / visualisation library such as Cesium. While bindings [exist](https://github.com/zouyaoji/vue-cesium) to allow Cesium to be used with Vue, the following limitations were present:
1. The bindings do not expose all functionality required for developing complex applications
2. Existing Cesium code is unable to be leveraged without modification, increasing development effort


A combination of watchers and setters expose data that is maintained in the vuex store. Additionally, a way to pass events to control the Cesium component (such as set the camera location).

## Using the application
At the login screen simply enter anything into the password field and press login. This is simply a placeholder for demonstrating access to authorised view using the vue-router.
Once in the application you can click to add points to the map. When two or more points are on the map a line will be drawn between them.
As the points are added they appear in the navigation draw on the left. Here you can delete points and the Cesium component will update accordingly.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## License
MIT

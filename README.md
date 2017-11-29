# BBDN-REST-Angular-WithProxy

The purpose of this project is to demonstrate how to use a proxy in Angular 2 to avoid Cross-Origin Resource Sharing (CORS) incompatibilities. If you need more information, Modilla Developers Network has a [good CORS write-up](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

Because Angular (and many other Javascript frameworks like JQuery) runs in the browser, the browser is responsible for protecting you from malicious sites and sites from malicious yous. As part of this, when certain requests are made, such as POST requests or requests with more than just the basic headers like Authorization headers, an OPTIONS request is sent to the endpoint being called to ask for permission to make an in-browser request. Blackboard Learn does not implement CORS, and so this request fails, and subsequently, so does your application.

By using a proxy, the allows your application to bypass this check by the browser and make the call without CORS being an issue.

To demonstrate this, we have created a basic user signup in Angular 2 that retrieves a token via basic OAuth and creates a user. This is not meant to teach you proper coding techniques, and in some cases, ignores common security measures. I have tried to point these out with comments, but the purpose is to show you how to use a proxy and successfully call Blackboard Learn APIs, and not how to be an Angular 2 coder.

To configure this application, you will need to edit the proxy.config.json file to set the target attribute to your learn domain including protocol, i.e. https://mylearnserver.blackboard.com. You will also need to modify the new-user-form.component.ts and add your key and secret. THIS IS NOT PRODUCTION CODE! NEVER PUT YOUR KEY AND SECRET DIRECTLY IN CODE!

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help
For help with Blackboard Learn development or this project in particular, please contact us at [developers (at) blackboard (dot) com](mailto:developers@blackboard.com).

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26. To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

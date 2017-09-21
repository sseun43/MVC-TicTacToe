# ####  My experience with MVC model

* **MODEL** : The model.js file contains all the data, it is the place to store variables, objects and arrays
* **VIEW** : The view.js file contains all the output display+HTML file. It contains all the things that our JS file would show.
* **CONTROLLER** :
    * **controller.js** :Controller's job is to prevent direct access to the view and model objects and thus prevent mutability. It does this by copying the view object and the model object.
    * **handler.js** : Handler's job is to call the methods in the controller object and bind it to an event. E.g Click event. Basically the handler handles the event

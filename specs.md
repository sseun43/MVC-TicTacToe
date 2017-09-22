###  SPECS
#### Model objects
 * model:object
    * properties :3
        * name: string
            * initialized:model
            * purpose: to serve as a way to refer to this model object
        * name: boolean
            * initialized:true
            * purpose: to serve as a way to monitor the players move
        * name: array
            * initialized: array of 9 lenght filled with null value
            * purpose: to serve as a model for the game table

#### view objects
* cow :Object
    * properties:1
        * name:string
            * initialized:view
            * purpose:to serve as reference to view object
    * methods:2
        * populateBoard: function
            * args:  0
            * return: undefined
            * behavior: copies the element in the model's array into the table
            * purpose: To make the view mirror the model exactly.
    
    * play: function
            * args:  0
            * return: undefined
            * behavior: fills the elements in the model's array with X or 0 and calls populateBoard function to make it visible
            * purpose: It enables the game state to be visible 

#### Handler

* handler :Object
    * properties:1
        * name:string
            * initialized:handler
            * purpose:to serve as reference to handler object
    * methods:1
        * buildBoard: function
            * args:  0
            * return: undefined
            * behavior: build an HTML table
            * purpose: build an HTML table and set events to make it interactive.
            

#### Controller

* control :Object
    * properties:2
        * viewer:objects
            * initialized:empty object
            * purpose:to serve as a source of reference to the view object
        * modeler:objects
            * initialized:empty object
            * purpose:to serve as a source of reference to the model object
    * methods:2
        * getView: function
            * args:  0
            * return: undefined
            * behavior: refer to the view object"copy"
            * purpose: to make sure that view object can be assessed
        
        * getModel: function
            * args:  0
            * return: undefined
            * behavior: refer to the model object"copy"
            * purpose: to make sure that model object can be assessed
































```



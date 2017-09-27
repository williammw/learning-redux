# redux

## reducer 
* just a piece of function return application state
* value of state created by reducer

## container 
* got reducer function and by using 'connect' all reducer response would become props inside the container

## action creator
* action creator is a function return action (object)

* if button clicked (need implementant), then will calls action creator will called
* action creator is an function return return object
* object has a tpye that describe the action just trigger
* could add extra information
* then return an action
* would send to all reducers
* reducer have a switch statment select state.
* reducer look for action type , if type matched, dispatch function 
* all action type update all redux (connect) 
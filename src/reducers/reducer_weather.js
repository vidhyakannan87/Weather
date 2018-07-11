import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //We add concat so that we dont change the state ,If we add state.push(action.payload.data) it will be similar
    //to this.state = something other than constructor which is not an ideal usage
    //Concat on the other hand will return a new array along with values of old array
     return  [ action.payload.data ].concat(state );

     //return [action.payload.data , ...state]; ->ES6 equiavlent of the above code
  }
  return state;
}

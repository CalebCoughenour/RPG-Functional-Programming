import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, gatherFood } from './js/script.js';


$(document).ready(function() {

  $('#gather-food').click(function() {
    let count = parseInt($('#turns').text());
    console.log(count)
    if (count < 3){
      const newState = stateControl(gatherFood);
      $('#food-value').text(`Food: ${newState.food}`);
      $('#turns').text(count + 1);
    } else {
      $('#message').text("You must rest to gather food!");
    }
  });


  $('#stokeFire').click(function() {
    
  });
});

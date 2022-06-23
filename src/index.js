import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, gatherFood, stokeFire, gatherWood } from './js/script.js';


$(document).ready(function() {
  $('#gather-food').click(function() {
    let count = parseInt($('#turns').text());
    if (count < 3){
      const newState = stateControl(gatherFood);
      $('#food-value').text(`${newState.food}`);
      $('#turns').text(count + 1);
      $("#message").text("");
    } else {
      $('#message').text("You must rest to gather food!");
    }
  });

  $('#rest').click(function() {
    let count = parseInt($('#turns').text());
    let woodCount = parseInt($('#wood-value').text());
    console.log(woodCount);
    if (woodCount <= 0) {
      $('#message').text("You must gather more wood!");
    } else if (count <= 0) {
      $("#message").text("You do not need to rest!")
    } else {
      const newState = stateControl(stokeFire);
      $('#wood-value').text(`${newState.wood}`)
      $('#turns').text(count - 1);
      $("#message").text("");
    }
  });

  $("#gather-wood").click(function() {
    let count = parseInt($('#turns').text());
    if (count < 4){
      const newState = stateControl(gatherWood);
      $("#wood-value").text(`${newState.wood}`);
      $("#turns").text(count + 1);
      $("#message").text("");
    } else {
      $("#message").text("You must rest to gather wood!");
    }
  });

  


});

  

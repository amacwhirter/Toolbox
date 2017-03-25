import './toolrent.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { custlist } from '../lib/custlist.js';

import { Accounts } from 'meteor/accounts-base';

import '../toolsearch/toolsearch.html';

test = new Mongo.Collection(null);

/*Template.toolrent.helpers({
  custlist: function() {
    return custlist.find();
  },
});*/


Template.toolrent.events({
  'click .toolrent-btn': function (e) {
    e.preventDefault();

      let toolrent = $("#tool").val();
      let price = $("#price").val();
      let location = Geolocation.currentLocation();
      let currentUserId = Meteor.userId();

      console.log(toolrent);
      console.log(price);
      console.log(location);
      console.log(currentUserId);
      
      test.insert({
            toolrent: toolrent,
            price: price,
            /*location: location,*/
            name: 'Joe'
        });
      test.insert({
            toolrent: "lawnmower",
            price: 10,
            /*location: location,*/
            name: 'Billy'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 8,
            /*location: location,*/
            name: 'Bob'
      })

      test.insert({
            toolrent: "lawnmower",
            price: 20,
            /*location: location,*/
            name: 'Lane'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 15,
            /*location: location,*/
            name: 'Suzy'
      })

      test.insert({
            toolrent: "chainsaw",
            price: 25,
            /*location: location,*/
            name: 'Suzy'
      })
         $('#tool').empty();
        $('#price').empty();
  	},
})

Template.toolsearch.events({
  'click .toolsearch-btn': function (e) {
      e.preventDefault();

      var locate = test.find().fetch();
      var searchedTool = $('#tool').val();
  
     
      for(var i = 0; i < locate.length; i++){
       

        if(searchedTool === locate[i].toolrent){
         var toolrent = $('<p>').html(locate[i].toolrent);
         var name = $('<p>').html(locate[i].name);
         var price = $('<p>').html(locate[i].price);

         $('#userpost')
         .append(toolrent)
         .append(name)
         .append(price);

        }
      }
        $('#tool').empty();

  }
})

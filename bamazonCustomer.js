var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "nsmdark10o",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {
      throw err;
    }
    showItems();
  //   console.log("Hello Connection");
  // connection.end();
});


var showItems =function () {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products order by item_id ASC", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            console.log(results)
            console.log(results.length)
            for (var i = 0; i < results.length; i++) {
              console.log("ID: " + results[i].item_id + " " + results[i].product_name + " $" +  results[i].price + " Remaining: " + results[i].stock_quantity)

              var item_id = results[i].item_id;
            choiceArray.push(item_id.toString());

            // choiceArray.push(results[i].product_name + " $" +  results[i].price + " Remaining: " + results[i].stock_quantity);

            }
            return choiceArray;
          },
          message: "What item would you like to buy?"
        },
        {
          name: "toBuy",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        // console.log("Customer's choice: " + answer.choice);
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id.toString() === answer.choice) {
            chosenItem = results[i];
          }
      
        }

        // determine if enough items
        if (chosenItem.stock_quantity > answer.toBuy) {
          // bid was high enough, so update db, let the user know, and start over
          console.log(answer.bid);
          var newStock = chosenItem.stock_quantity - answer.toBuy
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                //change to products table
                stock_quantity: newStock
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(error) {
              if (error){ throw err;}
              console.log("Items bought!");

            }
            
          );

          console.log("Item bought")
          connection.end();
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Not enough inventory. Try again...");
            connection.end();
        }
      });
  });
}
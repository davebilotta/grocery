var main = [];
var misc = [];
var produce = [];
var meat = [];
var dairy = [];
var all = [];
var selected = [];

var id = 0;
//var selected = new Array();

$(document).ready(function() {

	init();

	$('.main-item').click(function() {
		var item = $(this).text();
		var id = $(this).attr("id");
	
		console.log("id is: "+id);

		var newItem = {};
		
		// Found
		if (!itemInList(id,selected)) {
			selected[id] = all[id];
		}
		all[id].count++;
		refreshList();

	
	}); // end click

    $("#list").on('click','.list-item',function() {
 	  // 
 	  var id = $(this).attr("id");
 	  console.log(id);
      // $(this).remove(); 
      all[id].count--;
      if (all[id].count == 0) {
      	selected[id] = null;
      }
      refreshList();
      //$(this).effect('explode');
      //console.log("click");
      //$(this).addClass('hover');
    })
    .on('mouseenter','.list-item',function() {
    	$(this).addClass('hover');
    })
    .on('mouseleave','.list-item',function() {
    	$(this).removeClass('hover');
    });
});

function itemInList(item,list) {
	if (list[item]) { 
		return true;
	}
	else { 
		return false;
	}

} // end itemInList function


function itemInList2(item,list) {
	for (i = 0; i < list.length; i++) {
		var checkObj = list[i];
		if (checkObj.id == item) {
			return true;
		}
		else {
			return false;
		}
	}
} // end itemInList function

function refreshList() {
	console.log("refreshing list");
	$("#list").empty();

	for (i = 0; i < selected.length; i++) {
		if(selected[i] != undefined) {
			var str = "";
			var obj = selected[i];
			console.log(obj);
			if (obj.count > 1) {
				str = " ("+obj.count+")";
			}
			$("#list").append("<li class='list-item' id='"+i+"'>"+obj.name+str+"</li>");
		}
	}

} // end refreshList

function init() {
	createGroceryItems();
	createMiscItems();
	createProduceItems();
	createMeatSeafoodFrozenItems();
	createDairyItems();

}

function Item (category,name) {
	// Constructor
	this.count = 0;
	this.category = category;
	this.name = name;
	this.id = id++;
}

function addItems(category,category_array,items) {
	//alert(main.length);
	//main.push(new Item("produce","Carrots"));
	//alert(main.length);

	for (var i = 0; i < items.length; i++) {
		// Create object here

		// Add to array
	var it = new Item(category,items[i]);
	//
	category_array.push(it);
	all.push(it);
	//category_array.push(new Item(category,items[i]));
	//var it = new Item(category,items[i]);
		// Add to DOM
		$('#'+category).append("<li class='main-item' id='"+it.id+"'>"+items[i]+"</li>");
	}
}

function createGroceryItems() {
	var items = ["Coffee", "Cheerios", "Beans (pinto)", "Beans (black)", "Tomatoes (diced)","Tomatoes (pureed)","Tomato paste","Tortilla chips",
					"Ketchup","Mustard","Mayo","Oatmeal","Pretzels","Peanuts","Almonds","Pistachios"];
	items.sort();
	addItems("main",main,items);

}

function createMiscItems() {
	var items = ["Toilet paper","Paper towels","Laundry detergent","Tissues","Soap (dish)","Soap (bar)",
	         "Soap (hand)","Other"];
	items.sort();
	addItems("misc",misc,items);
}

function createProduceItems() {
	var items = ["Lettuce","Tomatoes","Carrots","Zucchini","Peppers (red)","Peppers (green)","Apples","Bananas","Onions","Garlic","Summer squash"];
	items.sort();
	addItems("produce",produce,items);
}

function createMeatSeafoodFrozenItems() {
	var items = ["Chicken","Steak","Shrimp","Salmon","Ice cream","French fries","Blueberries"];
	items.sort();
	addItems("meat",meat,items);
}

function createDairyItems() {
	var items = ["Milk","Cheese (cheddar)","Cheese (mozzarella)","Hummus","Milk (soy)","Butter","Heavy cream","Milk (almond)","Eggs"];
	items.sort();
	addItems("dairy",dairy,items);
}

// ########################################
/*
*	Table of Contents
*	1)	Parent Function
*	2)	Child Functions
*		a) Adding Function
*		b) Checking Item Function
*		c) Deleting Item Function
*/

// 	Unresolved Issues (25July2016, CAB)
// 		1) padding between "check" & "delete" buttons on new items.


// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(function () 
{
	addToList();
	checkItem();
	deleteItem();

});

// ########################################
/* ---------- Child Function ---------- */
// ########################################

/* ---------- a) Adding Function ---------- */

function addToList ()
{
	$("#js-shopping-list-form").submit(function (e) 
    {
        e.preventDefault();
        var userInput = $("input#shopping-list-entry").val();

        $.trim(userInput);

        // Verify user input is valid, prompt if not.
        if (!userInput) 
        {
            alert("Invalid input, please try again.");
            $(this).toggleClass("error", 1);
        } 
        else 
        {
            // Add item to list.
            console.log('Item_Added');
            $('.shopping-list').append('<li><span class="shopping-item">' +
                userInput + '</span><div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label"> check </span></button><button class="shopping-item-delete">' + '<span class="button-label"> delete </span></button></div></li>');
        }
    });
};

/* ---------- b) Checking Item Function ---------- */

function checkItem ()
{
	// Check Item.
    $(".shopping-list").on("click", ".shopping-item-toggle", function (e) 
    {
    	console.log('Check');
        e.preventDefault();
        $(this).closest('li').find(".shopping-item").toggleClass("shopping-item__checked");
    });
};

/* ---------- c) Deleting Item Function ---------- */

function deleteItem ()
{
	// Delete Item.
    $(".shopping-list").on("click", ".shopping-item-delete", function (e) 
    {
    	console.log('Delete');
        e.preventDefault();
        $(this).closest('li').remove();
    });
};








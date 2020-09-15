// app object
const app = {};

// global variables
let hstRate = 1.13
let rowPrice = 0;

// on click of new line button, display new table row 
app.addLine = function () {
  $('#addRow').click(function(e){
    // prevent refresh from going to the top of the page
    e.preventDefault();

    // append dynamic HTML on button click
    $('.dynamicItemRow').append (
      ` <div class="dynamicRow">
					<div class="inputFlexContainer">
						<label for="itemInput" class="itemLabel">Item</label>
						<input type="text" class="fieldInput inputRow itemDescInput" id="itemInput" name="itemInput" maxlength="38" placeholder="Enter item description here...">
					</div>
					<div class="amountFlexContainer">
						<label for="amountVal">Amount</label>
						<p class="currencySymbol fieldInput">$</p>
						<input type="tel" class="fieldInput inputRow amountVal" id="amountVal" name="amountValue" min="0" maxlength="7" autocomplete=off>
					</div>
				</div>
      `
    )

    // call rowPrice function
    app.rowPrice();
  });
}

// on input of number in amountVal, total that sum in subtotalVal 
app.rowPrice = function () {
  $('.dynamicRow').on('change', '.amountVal', function() {
    $('.amountVal').each(function(){
      app.numLimit();
      let inputVal = $(this).val();
      if ($.isNumeric(inputVal)){
        rowPrice += parseFloat(inputVal);
      }
    });
    
    $('.subtotalVal').text(`$ ${rowPrice}`);

    // call after tax calculation, and display in total
    app.afterTax();
  });
}

// limit number character input
app.numLimit = function () {
  $('.amountVal').on('change keyup', function() {
    // use regex to take each amount value input and remove text characters
    let limit = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(limit);
  });
}

// create total after tax 
app.afterTax = function () {
  // take value from total, make into a number, and multiple with tax rate of 13%
  let taxTotal = rowPrice * hstRate;
  $('.grandTotalVal').text(`$ ${taxTotal.toFixed(2)}`);
}

// initialize app
app.init = function() {
  app.addLine();
  app.numLimit();
}

// document ready
$(function () {
  app.init();
});

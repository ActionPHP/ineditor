$.fn.ineditor = function(options,callback){


		this.click(function(){
			
			var _edited = $(this);

			if(!_edited.hasClass('actionphp-ineditor')) {
					
					
					var _value = _edited.html();
					var _original = _value;

					var _input = '<input type="text" value="' + _value + '" class="actionphp-ineditor-input" />';

					_edited.addClass('actionphp-ineditor');
					_edited.html(_input);
					_edited.find('.actionphp-ineditor-input').focus();

					var _edited_input = _edited.find('.actionphp-ineditor-input');
					
					_edited_input.blur(function(){
					
						var _edited_value = _edited_input.val();
						_edited_value = (_edited_value) ? _edited_value : _original;
						_edited.html(_edited_value);
					
						_edited.removeClass('actionphp-ineditor');


						if (typeof callback == 'function') { // make sure the callback is a function
				     	   callback.call(this); // brings the scope to the callback
				    	}

					});
			} 

			_edited.keydown(function(e){

			if(e.keyCode == 13){

				$('.actionphp-ineditor-input').trigger('blur');
			}

			});

		});

		

		$(document).click(function(e){
			//	console.log(this);
				//console.log(e.target);
				if(!$(e.target).hasClass('actionphp-ineditor-input') && !$(e.target).hasClass('actionphp-ineditor') ){

					$('.actionphp-ineditor-input').trigger('blur');
				}
			});


	}

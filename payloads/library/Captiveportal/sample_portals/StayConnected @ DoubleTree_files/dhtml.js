function hideURLbar() {
    window.scrollTo(0, 1);
}
if (navigator.userAgent.indexOf('iPhone') != -1) {
    addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
    }, false);
}

function confirmAup(form){
	var retVal = false;
	if(form.aupAgree.checked){
		retVal = true;
	}
	return retVal;
}

function checkWsearch(form){
	var retVal = true;
	if((form.searchText.value == "Zip Code or City, State") || (form.searchText.value == "")){
		retVal = false;
		if(form.searchText.value == ""){
			form.searchText.value == "Zip Code or City, State";
		}
	} 
	return retVal;
}

function toggleWsearch(oRef){
	if(oRef.value == "Zip Code or City, State"){
		oRef.value = "";
	} else if(oRef.value == ""){
		oRef.value = "Zip Code or City, State";
	}
	return false;
}


function trim(s){
	return ltrim(rtrim(s));
}

function ltrim(s){
	if(s.length > 0){
		var l=0;
		while(l < s.length && s[l] == ' '){	
			l++;
		}
		return s.substring(l, s.length);
	} else {
		return s;
	}
}

function rtrim(s) {
	if(s.length > 0){
		var r=s.length -1;
		while(r > 0 && s[r] == ' ')	{
			r-=1;
		}
		return s.substring(0, r+1);
	} else {
		return s;
	}
}


var alreadySubmitted = false;


function validateAWSform(form){

	if(alreadySubmitted){
		
		var retFalse = false;
		
		if(form.UseDuration){
			if(form.aupAgree || form.AUPConfirmed){
				if(form.aupAgree){
					var thisFormAup = form.aupAgree;
				} else if (form.AUPConfirmed){
					var thisFormAup = form.AUPConfirmed;
				}
				if(thisFormAup.type != "hidden"){
					retFalse = true;
				}
			} else {
				retFalse = true;
			}
		} else {
			retFalse = true;
		}
		if(retFalse) {
			return false;
		}
	}	
	
	try {
		
		// membership:  username and password are all lowercase
		// roamer: Username and Password are initcapped.
		if(form.username){
			var usernameAlert = "Please input your Username or MemberID";
			var formUsername = form.username;
		} else if (form.Username) {
			var usernameAlert = "Please input your Username";
			var formUsername = form.Username;
		}
		if(formUsername){
			if(trim(formUsername.value) == ""){
				alert(usernameAlert);
				formUsername.focus();
				return false;		
			} 
		}
		
		if(form.roamRealm){
			if(form.roamRealm.selectedIndex){
				if(form.roamRealm.options[form.roamRealm.selectedIndex].value == ""){
					if(form.PaymentMethod.value == "Membership"){
						var realmAlert = "Please select your Domain";
					} else {
						var realmAlert = "Please select your Service Provider";
					}
					alert(realmAlert);
					form.roamRealm.focus();
					return false;
				}
			} else {
				if(form.roamRealm.options) {
					if(form.PaymentMethod.value == "Membership"){
						var realmAlert = "Please select your Domain";
					} else {
						var realmAlert = "Please select your Service Provider";
					}
					alert(realmAlert);
					form.roamRealm.focus();
					return false;
				} 
			}
		}
	
		if(form.password){
			var formPassword = form.password;
		} else if(form.Password) {
			var formPassword = form.Password;
		}
		if(formPassword){
			if(trim(formPassword.value) == ""){
				var passwordAlert = "Please input your Password";
				alert(passwordAlert);
				formPassword.focus();
				return false;		
			}
		}
	
		// NumberOfDays == credit card selector
		if(form.NumberOfDays){
			if(form.NumberOfDays.options[form.NumberOfDays.selectedIndex].value == ""){
				var selectAlert = "Please select the type of service you want to purchase.";
				alert(selectAlert);
				form.NumberOfDays.focus();
				return false;
			}
		}	
		
		// UseDuration == PMS selector
		if(form.UseDuration){
			if(form.UseDuration.options[form.UseDuration.selectedIndex].value == ""){
				var selectAlert = "Please select the length of connection time you wish to purchase.";
				alert(selectAlert);
				form.UseDuration.focus();
				return false;
			}
		}		
		
		if(form.FirstName){
			if(trim(form.FirstName.value) == ""){
				if(form.Style.value != "MCD2K7"){
					alert("Please input your First Name");
					form.FirstName.focus();
					return false;
				}
			}
		}
	
		if(form.LastName){
			if(trim(form.LastName.value) == ""){
				if(form.Style.value != "MCD2K7"){
					alert("Please input your Last Name");
					form.LastName.focus();
					return false;
				}
			}
		}
		
		if(form.PMSRoom){
			if(trim(form.PMSRoom.value) == ""){
				alert("Please input your Room Number");
				form.PMSRoom.focus();
				return false;
			}
		}	
	
		if(form.CreditCardNumber){
			var inputCcNumber = trim(form.CreditCardNumber.value);
			if(inputCcNumber.length != 4){
				alert("Please input the Last 4 Digits of your Credit Card");
				form.CreditCardNumber.focus();
				return false;
			} else if(isNan(parseInt(inputCcNumber))){
				alert("Please input the Last 4 Digits of your Credit Card as a number");
				form.CreditCardNumber.value = "";
				form.CreditCardNumber.focus();
				return false;
			}
		}	
		
		if(form.CreditCardExpirationMonth){
			if(form.CreditCardExpirationMonth.options[form.CreditCardExpirationMonth.selectedIndex].value == ""){
				var selectAlert = "Please specify the expiration month of your credit card";
				alert(selectAlert);
				form.CreditCardExpirationMonth.focus();
				return false;
			}
		}
		
		if(form.CreditCardExpirationYear){
			if(form.CreditCardExpirationYear.options[form.CreditCardExpirationYear.selectedIndex].value == ""){
				var selectAlert = "Please specify the expiration year of your credit card";
				alert(selectAlert);
				form.CreditCardExpirationYear.focus();
				return false;
			}
		}	
		
		if(form.GuestNumber){
			if(trim(form.GuestNumber.value) == ""){
				alert("Please input your Guest Number");
				form.GuestNumber.focus();
				return false;
			}
		}		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////
		// CREDIT CARD:
		////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if(form.Cardholder){
			if(trim(form.Cardholder.value) == ""){
				alert("Please input your name as it appears on your credit card");
				form.Cardholder.focus();
				return false;
			}
		}	
		
		if(form.CardType){
			if(form.CardType.options[form.CardType.selectedIndex].value == ""){
				alert("Please select your Card Type");
				form.CardType.focus();
				return false;
			}
		}
		
		if(form.CardNumber){
			var inputCardNumber = trim(form.CardNumber.value);
			if(inputCardNumber == ""){
				alert("Please input your Credit Card Number");
				form.CardNumber.focus();
				return false;
			} else {
				var parsedCardNumber = "";
				var l=0;
				while(l < inputCardNumber.length){
					if(!(isNaN(parseInt(inputCardNumber.charAt(l))))){
						parsedCardNumber += inputCardNumber.charAt(l);
					}
					l++;
				}
				var invalidNumberAlert = "Invalid Input: Please re-enter your Card Number, leaving out any dashes, spaces or other non-numeric characters.";
				var invalidNumberInput = false;
				if(form.CardType){
					if(form.CardType.options[form.CardType.selectedIndex].value == "AMERICAN EXPRESS"){
						if(parsedCardNumber.length != 15){
							invalidNumberInput = true;
						}
					} else if(parsedCardNumber.length != 16){
						invalidNumberInput = true;
					}
				} else if((parsedCardNumber.length < 15) || (parsedCardNumber.length > 16)){
					invalidNumberInput = true;
				}
				if(invalidNumberInput){
					alert(invalidNumberAlert);
					form.CardNumber.focus();
					return false;
				}
			}
		}
		
		
		
	
		if(form.ExpirationMonth){
			if(form.ExpirationMonth.options[form.ExpirationMonth.selectedIndex].value == ""){
				var selectAlert = "Please specify the expiration month of your credit card";
				alert(selectAlert);
				form.ExpirationMonth.focus();
				return false;
			}
		}
		
		if(form.ExpirationYear){
			if(form.ExpirationYear.options[form.ExpirationYear.selectedIndex].value == ""){
				var selectAlert = "Please specify the expiration year of your credit card";
				alert(selectAlert);
				form.ExpirationYear.focus();
				return false;
			}
		}	
		
		if(form.Cv){
			if(trim(form.Cv.value) == ""){
				alert("Please input your Credit Card's security code (CVV2 Number)");
				form.Cv.focus();
				return false;
			}
		}	
	
		if(form.Country){
			if(form.Country.options[form.Country.selectedIndex].value == ""){
				var selectAlert = "Please select your Country";
				alert(selectAlert);
				form.Country.focus();
				return false;
			} else if(form.Country.options[form.Country.selectedIndex].value == "USA") {
				if(form.AVSZip){
					if(trim(form.AVSZip.value) == ""){
						alert("Please input the billing Zip Code for your credit card.");
						form.AVSZip.focus();
						return false;
					}
				}
			}
		}		
		
		if(form.UserEmail){
			if(trim(form.UserEmail.value) == ""){
				if(form.Style.value != "MCD2K7"){
					alert("Please input your Email Address");
					form.UserEmail.focus();
					return false;
				}
			}
		}
		
		if(form.CouponNumber){
			if(trim(form.CouponNumber.value) == ""){
				alert("Please input your Coupon Code");
				form.CouponNumber.focus();
				return false;
			}
		}	
		
		if(form.PromotionCode){
			if(trim(form.PromotionCode.value) == ""){
				alert("Please input your Event Code");
				form.PromotionCode.focus();
				return false;
			}
		}	
	
		if(form.ArchCardNumber){
			if(trim(form.ArchCardNumber.value) == ""){
				alert("Please input your Arch Card Number");
				form.ArchCardNumber.focus();
				return false;
			}
		}		
		
		
		if(form.AttemptedPassword){
			if(trim(form.AttemptedPassword.value) == ""){
				if(form.PaymentMethod.value == "Meeting"){
					alert("Please input your Meeting Room Password");
				} else {
					alert("Please input your Password");
				}
				form.AttemptedPassword.focus();
				return false;
			}
		}
		
		if(form.PrepaidCardNumber){
			if(trim(form.PrepaidCardNumber.value) == ""){
				alert("Please input your Prepaid Card Number");
				form.PrepaidCardNumber.focus();
				return false;
			}
		}		
		
		if(form.InputOAC){
			if(trim(form.InputOAC.value) == ""){
				alert("Please input your Access Code");
				form.InputOAC.focus();
				return false;
			}
		}		
		
		if(form.InputWbrId){
			if(trim(form.InputWbrId.value) == ""){
				alert("Please input your Wyndham ByRequest Id");
				form.InputWbrId.focus();
				return false;
			}
		}	
		if(form.InputRoomNumber){
			if(trim(form.InputRoomNumber.value) == ""){
				alert("Please input your Room Number");
				form.InputRoomNumber.focus();
				return false;
			}
		}	
		//////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		// always leave aup checkbox last
		
		
		if(form.aupAgree || form.AUPConfirmed){
			if(form.aupAgree){
				var formAupCb = form.aupAgree;
			} else if (form.AUPConfirmed){
				var formAupCb = form.AUPConfirmed;
			}

			if(!(form.AUP || form.WSIALD || form.MARRIOTT_TOU || (formAupCb.type == "hidden"))){			
				if(!(formAupCb.checked)){
					var aupAlert = "Please agree to the Terms of Service and Acceptable"
					aupAlert += "\n";
				    aupAlert += "Use Policy by clicking the checkbox below.";
					alert(aupAlert);
					formAupCb.focus();
					return false;
				}
			}
		}
		
		if(form.AUP){
			form.AUP.value = "";
		}
		if(form.WSIALD){
			form.WSIALD.value = "";
		}
		if(form.MARRIOTT_TOU){
			form.MARRIOTT_TOU.value = "";
		}
	} catch(err) {
		// alert(err.message);
		// return false;
	}

	alreadySubmitted = true;
	
	return true;
	
}

function form_field_focus(val){
	return true;
}
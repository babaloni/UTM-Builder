/**
 * Created by lonniwalker on 8/31/16.
 */

    // Attach a submit handler to the form
$( "#url_builder" ).submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();
});


//opens and closed the Divs based on what the user selects in the utmsource area
document.getElementById('UtmSource').addEventListener('change', function () {
    var selection = this.value;

    if ( this.value == 'display')
    {
        document.getElementById('displayDetails').style.display = "block";

    }
    else
    {
        document.getElementById('displayDetails').style.display = "none";
    }

    if ( this.value == 'email')
    {
        document.getElementById('emailDisplay').style.display = "block";

    }
    else
    {
        document.getElementById('emailDisplay').style.display = "none";
    }
    if ( this.value == 'pr')
    {
        document.getElementById('prDisplay').style.display = "block";

    }
    else
    {
        document.getElementById('prDisplay').style.display = "none";
    }
    if ( this.value == 'internal-share')
    {
        document.getElementById('internalShare').style.display = "block";

    }
    else
    {
        document.getElementById('internalShare').style.display = "none";
    }
    if ( this.value == 'ppc')
    {
        document.getElementById('ppcDetails').style.display = "block";
    }
    else
    {
        document.getElementById('ppcDetails').style.display = "none";
    }
    if ( this.value == 'retargeting')
    {
        document.getElementById('retargetDisplay').style.display = "block";
    }
    else
    {
        document.getElementById('retargetDisplay').style.display = "none";
    }
    if ( this.value == 'social-media')
    {
        document.getElementById('socialmediaDisplay').style.display = "block";
    }
    else
    {
        document.getElementById('socialmediaDisplay').style.display = "none";
    }
    if ( this.value == 'third-party')
    {
        document.getElementById('thirdpartyDisplay').style.display = "block";
    }
    else
    {
        document.getElementById('thirdpartyDisplay').style.display = "none";
    }

});



//show final reasults in the correct box
function showFinalString(i){
    var mystring = i;

    document.getElementById("copytextarea").innerHTML = mystring;

    if (mystring == ""){
        document.getElementById('copytextbtn').style.display = "none";
        document.getElementById('copytextbtnexcluded').style.display = "none";}
    else {
        document.getElementById('copytextbtn').style.display = "block";
        document.getElementById('copytextbtnexcluded').style.display = "block";}


}

//Getting the values from the correct sections that are open

function displaySection(){

    var utmSourceValue = "utm_medium=" + $('#UtmSource').val();
    return utmSourceValue;

}

function displaySalesForceVals(utmvalue){
    var sfvalue = [["getapp","GetApp"],["capterra","Capterra"],["display","Display"],["internal-share","Internal Share"],["ppc","PPC"],["pr","PR"],["retargeting","Retargeting"],["social-media","Social Media"],["third-party","Third Party"],["bing","Bing"],["email","Email"],["direct-buy","Direct Buy"],["facebook","Facebook"],["google","Google"],["linkedIn","LinkedIn"],["network","Network"],["pinterest","Pinterest"],["simplifi","Simpli.fi"],["twitter","Twitter"],["yahoo","Yahoo"],["youtube","Youtube"],["googleplus","Google+"],["other","Other"],["slideshare","Slideshare"],["adroll","Adroll"],["facebook-rt","Facebook RT"],["linkedin-rt","LinkedIn RT"],["yahoo-rt","Yahoo RT"],["Affiliate","Affiliate"],["email-banner","Email - banner"],["email-sponsored","Email - Sponsored"],["partner-provided-google","Partner Provided - Google"],["web-partner-program","Web Partner Program"]];
    var utmval = utmvalue;

    for (i=0;i < sfvalue.length;i++){
        console.log(sfvalue[i][0]);
        console.log(utmval);
        if (sfvalue[i][0] == utmval){
            return sfvalue[i][1];
        }
    }

    return utmval;
}

function displayVals() {
    var displayID = ["emailDisplay", "prDisplay", "displayDetailsSelect", "internalDetailsSelect", "ppcDetailsSelect", "retargetDetailsSelect", "socialDetailsSelect", "thirdDetailsSelect"];
    var utmmed = $('#UtmSource').val();
    var singleValues = "";
    var utmsrc = "";
    console.log(singleValues);
    console.log(displayID[0]);

    for (var i = 0; i < displayID.length; i++) {
        var displayTemp = displayID[i];
        switch (displayTemp){
            case 'emailDisplay':
                if ( $('#emailDisplay').css('display') == 'block')
                {
                    var e = document.getElementById('displayEmail');
                    utmsrc = e.value;
                    singleValues = singleValues + "&utm_source=" + e.value ;
                    i = displayID.length + 10;
                }
                break;

            case 'prDisplay':
                if ( $('#prDisplay').css('display') == 'block')
                {
                    var p = document.getElementById('displayPR');
                    utmsrc = p.value;
                    singleValues = singleValues + "&utm_source=" + p.value;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'displayDetailsSelect':
                if ( $('#displayDetails').css('display') == 'block')
                {
                    utmsrc = $('#displayDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'internalDetailsSelect':
                if ( $('#internalShare').css('display') == 'block')
                {
                    utmsrc =  $('#internalDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'ppcDetailsSelect':
                if ($('#ppcDetails').css('display') == 'block')
                {
                    utmsrc =  $('#ppcDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'retargetDetailsSelect':
                if ( $('#retargetDisplay').css('display') == 'block')
                {
                    utmsrc = $('#retargetDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'socialDetailsSelect':
                if ( $('#socialmediaDisplay').css('display') == 'block')
                {
                    utmsrc = $('#socialDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            case 'thirdDetailsSelect':
                if ( $('#thirdpartyDisplay').css('display') == 'block')
                {
                    utmsrc = $('#thirdDetailsSelect').val();
                    singleValues = singleValues + "&utm_source=" + utmsrc;
                    console.log(singleValues);
                    i = displayID.length + 10;

                }
                break;

            default :
                utmsrc  = "other";
                singleValues = "other";
                console.log(singleValues);
                i = displayID.length + 10;



        }
    }
    var sfsrcvalues = displaySalesForceVals(utmmed);
    var sfsrc = "src=" + sfsrcvalues;

    var sflsdvalues = displaySalesForceVals(utmsrc);
    var sflsd = "&lsd=" + sflsdvalues;

    var finalutm = sfsrc + sflsd + singleValues + "&utm_medium=" + utmmed;

    return finalutm;

}
function ridSpaceCaps(v){
    var temp = v;
    temp = temp.replace(/\s+/g, '-').toLowerCase();
    return temp;
}
function ridSpace(v){
    var temp = v;
    temp = temp.replace(/\s+/g, '');
    return temp;
}
function displayInputVals() {

    var campaign = $('#render_utm_campaign');
    var content = $('#render_utm_content');
    var term = $('#render_utm_term');
    var cidnum = $('#render_cid_number');
    var utmstring = "";
    var sfvalue = "";
    var temp = "";

    if (campaign.val() != ""){
        temp = campaign.val();
        var temputm = ridSpaceCaps(temp);
        utmstring = utmstring + "&utm_campaign=" + temputm;
        sfvalue = sfvalue + "&cnm=" + temp;

    }else {
        utmstring = utmstring + "&utm_campaign=(not set)";
        sfvalue = sfvalue + "&cnm=(not set)";
    }

    if (content.val() != ""){
        temp = content.val();
        temp = ridSpaceCaps(temp);
        utmstring = utmstring + "&utm_content=" + temp;

    }

    if (term.val() != ""){
        temp = term.val();
        temp = ridSpaceCaps(temp);
        utmstring = utmstring + "&utm_term=" + temp;

    }

    if (cidnum.val() != ""){
        temp = cidnum.val();
        temp = ridSpaceCaps(temp);
        utmstring = utmstring + "&cid=" + temp;

    }
    var fullstring = sfvalue + utmstring;
    return fullstring;
}
function displayWebsite() {
    var websitevalue = $('#render_website');
    var finalwebsite = "";
    var urlStatus = websitecheck(websitevalue.val());
    var finalurl = websitevalue.val();
    finalurl = $.trim(finalurl);
    console.log(urlStatus);
    if (urlStatus == true){
        finalwebsite = finalurl + "?";
    }
    console.log(finalwebsite);
    return finalwebsite;

}
//need to add in the checks
//need to add in reading of the text fields and edit the content to the format carrie wants

//Finally need to configure the string correctly
//build the string
function showValues() {

    var fields = $( ":input" ).serializeArray(); //not used
    var newfield = displayVals();
    var newInput = displayInputVals();
    var finalnumber = displayWebsite();

    if (finalnumber !== ""){
        finalnumber = finalnumber + newfield + newInput;
        var encodefinalurl = encodeURI(finalnumber);
        showFinalString(encodefinalurl);
        document.getElementById('website-validation-message').style.display = "none";
    }
    else {
        document.getElementById('website-validation-message').style.display = "block";
        hideValues();

    }
}

function hideValues() {
    var clearfield = "";
    showFinalString(clearfield);
}

function ClipBoard()
{

    var copyTextarea = document.querySelector('#copytextarea');
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

}

function websitecheck(website){
    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    var regex = new RegExp(expression);
    var t = website;
    console.log(t);
    console.log(t.match(regex));
    if (t.match(regex) )
    {
        return true;
    } else {
        return false;
    }
}



// need to check the fields when submit is hit - if the specific fields are not filled then error pops up and the result is not filled.